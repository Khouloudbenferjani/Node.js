const http = require('http');
const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
  res.write("<h1> hello world </h1>")
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});