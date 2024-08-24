import mysql from 'mysql';

var con = mysql.createConnection({ 
    host: "localhost",
    user: "mySQLUser",
    password: "Mik332PichaelT$f3"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //con.query("CREATE DATABASE mydb", function (err, result) {
       // if (err) throw err;
        //console.log("Database created");
    });