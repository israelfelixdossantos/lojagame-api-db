import { Component } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {
  public produto : Produto = new Produto('', '', '', '', 0);
    constructor(
      private _produtoService: ProdutoService,
      private _router: Router
    ) {}
    cadastrar(): void {
      this._produtoService.cadastrarProduto(this.produto).subscribe(
        (produto) => {
          this.produto = new Produto('', '', '', '', 0);
          alert('Cadastro Efetuado com sucesso');
        },(err) => {alert('Erro ao Cadastrar');}
      );
      this._router.navigate(['/home']);
  }
}
