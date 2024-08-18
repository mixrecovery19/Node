import http from 'http';
import { Formidable } from 'formidable';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
    if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
        const form = new Formidable();
        
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('File upload failed');
                return res.end();
            }
            
            const uploadedFile = files.filetoupload[0];

            
            if (uploadedFile && uploadedFile.filepath && uploadedFile.originalFilename) {
                const oldPath = uploadedFile.filepath;
                const newPath = path.join('C:/Users/User/Node/', uploadedFile.originalFilename);
                
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.write('File saving failed');
                        return res.end();
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('File uploaded and saved');
                    res.end();
                });
            } else {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                res.write('No file uploaded or file properties missing');
                res.end();
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
});

server.listen(5173, () => {
    console.log('Server is listening on port 5173');
});
