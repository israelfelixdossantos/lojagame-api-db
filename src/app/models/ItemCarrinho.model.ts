export class ItemCarrinho {
  produto_id: string;
  nome: string;
  quantidade: number;
  preco_unitario: number;
  adicionado_em: Date;
  constructor(
    produto_id: string,
    nome: string,
    quantidade: number,
    preco_unitario: number,
    adicionado_em: Date
  ) {
    this.produto_id = produto_id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
    this.adicionado_em = adicionado_em;
  }
}
