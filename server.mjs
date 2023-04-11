import { createServer } from "node:http";

const server = createServer((request, response) => {
console.log("request received");

response.statusCode = 200;

response.setHeader("Content-Type", "text/html");

response.end(
"<html><body><h1>Bentornati su questo sito!</h1><p>Siamo felici di avervi qui e vi ringraziamo per la vostra visita. Speriamo che possiate trovare le informazioni che state cercando. Grazie!</p></body></html>"
);
});

server.listen(3000, () => {
console.log(`Server running at http://localhost:3000`);
});