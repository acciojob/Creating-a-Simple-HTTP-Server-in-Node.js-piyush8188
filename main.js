const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
 res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
  // TODO: Log a message to the console when the server starts listening on the port
});
