var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This should append text not replace it', function (err) {
  if (err) throw err;
  console.log('Updated!');
});