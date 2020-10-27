const express = require("express");
const app = express();

function logger(req, res, next) {
  console.log("======================");
  console.log(
    "Route received: " + req.protocol + " " + req.get("host") + req.originalUrl
  );
  console.log("Request Middelware");
  next();
}

app.use(express.json());
app.use(logger);

// app.all("/users", (req, res, next) => {
//   console.log("Middleware app.all()");
// res.send("Finish")
//   next();
// });

let users = [
  { name: "Diego", age: 29 },
  { name: "Alonso", age: 32 },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  res.json({ message: "User created" });
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
