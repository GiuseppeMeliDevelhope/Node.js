const fs = require('fs');

const content = 'Ciao, mi chiamo Giuseppe Meli.';

fs.writeFile('myfile.txt', content, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
