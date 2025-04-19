import { ItemCarrinho } from './ItemCarrinho.model';

export class Compra {
  compra_id: string;
  produtos: ItemCarrinho[];
  data_compra: Date;
  total: number;
  constructor(
    compra_id: string,
    produtos: ItemCarrinho[],
    data_compra: Date,
    total: number
  ) {
    this.compra_id = compra_id;
    this.produtos = produtos;
    this.data_compra = data_compra;
    this.total = total;
  }
}
