const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./models/Produto")
const Produto = mongoose.model("Produto")
require("./models/Usuario")
const Usuario = mongoose.model("Usuario")

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/lh-gamer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));



// Rota GET
app.get("/produtos", async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

// Rota POST
app.post("/produtos", async (req, res) => {
  const nova = new Produto(req.body);
  await nova.save();
  res.status(201).json(nova);
});

app.post("/usuarios", async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  res.status(201).json(novoUsuario);
});

//rota GET para buscar um produto pelo ID
app.get("/produto/:id", async (req, res) => {
  const Produto = await Produto.findById(req.params.id);
  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }
  res.json(produto);
});

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log("Servidor rodando! ");
});
