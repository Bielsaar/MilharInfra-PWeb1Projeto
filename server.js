
const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static(`./dist/Milharinfra`));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/Milharinfra/'}),
);

app.listen(process.env.PORT || 8080);
