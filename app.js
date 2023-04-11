const http = require("http");

function createApp() {
  const app = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Welcome to the World Wide Web!");
    response.end();
  });

  return app;
}

module.exports = createApp;
