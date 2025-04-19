import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
})
export class ListarProdutoComponent {
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
        return new Produto(
          item.id,
          item.produto,
          item.descricao,
          item.foto,
          item.preco
        );
      });
    });
  }

  excluir(id: number) {
    this._produtoService.excluirProduto(id).subscribe(
      (produto) => {
        this.listarProdutos();
      },
      (err) => {
        alert('Erro ao Excluir');
      }
    );
    this._router.navigate(['/home']);
  }
}
