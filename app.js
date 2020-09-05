//servidor http con express
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//midleware: ejecuta una funcion antes que se hagan las solicitudes de ruta.
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Bienvenido a mi sitio dinamico"
  });
  // res.send("Bienvenido al server Express!");
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloServicio: "Variedad de servicios"
  });
  // res.send("<h1>Servicios</h1>");
});
app.get("/blog", (req, res) => {
  res.render("blog");
  // res.send("<h1>Servicios</h1>");
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "Pagina no encontrada",
  });
  // res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});