const fs = require('fs');

const content = 'hello world';

fs.writeFile('welcome.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // fichier écrit avec succès
});

