const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./models/Produto")
const Produto = mongoose.model("Produto")
require("./models/Usuario")
const Usuario = mongoose.model("Usuario")
// const flash = require("connect-flash");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const passport = require("passport")
require("./config/auth")(passport)

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  session({
    secret: "chave-lhGames",
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())
// app.use(flash());

// mongoose
  mongoose
  .connect("mongodb+srv://grrifs:5FEcHEXNGNXc5xSH@cluster0.w29uqxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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

// app.post("/usuarios", async (req, res) => {
//   const novoUsuario = new Usuario(req.body);
//   await novoUsuario.save();
//   res.status(201).json(novoUsuario);
// });
app.post("/usuarios", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Verifica se já existe usuário
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: "Usuário já cadastrado." });
    }

    // Criptografa a senha
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    // Cria o novo usuário
    const novoUsuario = new Usuario({
      nome,
      email,
      senha: senhaHash
    });

    await novoUsuario.save();
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error("Erro ao cadastrar usuário:", err);
    res.status(500).json({ message: "Erro ao cadastrar usuário." });
  }
});

//rota GET para buscar um produto pelo ID
app.get("/produtos/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID invalido" });
  }

  try {
    const produto = await Produto.findById(id);
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.json(produto);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar o produto" });
  }
});

// Rota PUT para atualizar um produto
// Rota PUT para atualizar um produto
app.put("/produtos/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID invalido" });
  }

  const { produto, descricao, foto, preco } = req.body;

  if (!produto || !descricao || !foto || preco == null) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      id,
      { produto, descricao, foto, preco },
      { new: true }
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.json(produtoAtualizado);
  } catch (err) {
    console.error("Erro no PUT:", err);
    res.status(500).json({ message: "Erro ao atualizar o produto" });
  }
});



const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log("Servidor rodando! ");
});
