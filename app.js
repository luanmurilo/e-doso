const express = require("express");
const exphbrs = require("express-handlebars");
const app = express();
const porta = 3000;

app.engine("handlebars", exphbrs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/cadastrologin", (req, res) => {
  res.render("cadastroLogin");
});

app.get("/cursos", (req, res) => {
  res.render("selecionaCurso");
});

app.listen(porta, (err) => {
  if (err) {
    console.log("Erro ao iniciar servidor na porta " + porta);
  } else {
    console.log("Servidor rodando na porta " + porta);
  }
});
