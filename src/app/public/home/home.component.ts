import { Component } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../models/Produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public produtos: Produto[] = [];
  constructor(
    private _produtoService: ProdutoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        return new Produto(item.id, item.produto, item.descricao, item.foto, item.preco);
      });
    });
  }

}
