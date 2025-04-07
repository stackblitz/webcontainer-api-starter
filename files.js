/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
    'index.js': {
      file: {
        contents: `
import express from 'express';
const app = express();
const port = 3111;
  
app.get('/', (req, res) => {
    res.send('welcome to spuntentertainment! ');
});
  
app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
});`,
      },
    },
    'package.json': {
      file: {
        contents: `
          {
            "name": "spuntentertainment-web-con",
            "type": "module",
            "dependencies": {
              "express": "latest",
              "nodemon": "latest"
            },
            "scripts": {
              "start": "nodemon index.js"
            }
          }`,
      },
    },
  };