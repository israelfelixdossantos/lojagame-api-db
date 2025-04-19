import { ItemCarrinho } from './ItemCarrinho.model';
import { Compra } from './Compra.model';

export class Usuario {
  nome: string;
  email: string;
  senha: number;
  carrinho: ItemCarrinho[];
  compras: Compra[];

  constructor(
    nome: string,
    email: string,
    senha: number,
    carrinho: ItemCarrinho[],
    compras: Compra[]
  ) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.carrinho = carrinho;
    this.compras = compras;
  }
}
