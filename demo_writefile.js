var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This Text Should Replace-Hello Content-With What You Are Reading Now', function (err) {
  if (err) throw err;
  console.log('Saved!');
});