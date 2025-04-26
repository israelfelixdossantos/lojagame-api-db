const mongoose = require('mongoose');

const ItemCarrinhoSchema = new mongoose.Schema({
  produto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  nome: String,
  quantidade: { type: Number, default: 1 },
  preco_unitario: Number,
  adicionado_em: { type: Date, default: Date.now }
}, { _id: false });

const CompraSchema = new mongoose.Schema({
  compra_id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  produtos: [ItemCarrinhoSchema],
  data_compra: { type: Date, default: Date.now },
  total: Number
}, { _id: false });

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }, 
  eAdmin: { type: Number, default: 0 },
  carrinho: [ItemCarrinhoSchema],
  compras: [CompraSchema]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);