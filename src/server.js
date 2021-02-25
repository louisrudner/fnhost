const http = require('http');

module.exports = config => (fn = console.log) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': config.contentType });
    fn(req, res);
    res.end();
  });
  server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
  server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
  return server;
};
