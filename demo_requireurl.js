var url = require('url');
var adr = 'http://localhost:5173/default.htm?year=2024&month=august';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:5173'
console.log(q.pathname); //returns '/default.htm'   
console.log(q.search); //returns '?year=2024&month=august'

var qdata = q.query; //returns an object: { year: 2024, month: 'august' }
console.log(qdata.month); //returns 'august'
