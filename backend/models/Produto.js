const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    produto: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true }
});
    
mongoose.model("Produto", ProdutoSchema)   
  