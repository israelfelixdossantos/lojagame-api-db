import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../models/Produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  public produtoId: string = '';
  public produto: Produto = new Produto('', '', '', '', 0);

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.produtoId = params['id'];

      this._produtoService.getProduto(this.produtoId).subscribe(produto => {
        console.log('Produto recebido do backend:', produto);
        if ((produto as any)._id) {
          produto.id = (produto as any)._id;
        }
        this.produto = produto;
      });
    });
  }

  editar(id: string): void {
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      () => {
        this._router.navigate(['/listar-produtos']);
      },
      err => {
        alert('Erro ao atualizar');
        console.error(err);
      }
    );
  }
}
