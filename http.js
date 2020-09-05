//servidor http con node vanilla

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Respuesta del servidor");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("escuchando peticiones en el puerto: ", puerto);
});
