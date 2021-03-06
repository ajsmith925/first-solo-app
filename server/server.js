const express = require('express');
const app = express();
const path = require('path');


// statically serve everything in the build folder on the route '/build'

app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', nasaController.loadImage, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../auth/login.html'));
});

app.listen(3000, ()=>console.log('hello')); //listens on port 3000 -> http://localhost:3000/
