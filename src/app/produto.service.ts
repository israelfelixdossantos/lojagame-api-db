import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url: string = 'http://localhost:8089/produtos';     

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<any[]>(this.url).pipe(
      map(produtos => produtos.map(p => 
        new Produto(p._id, p.produto, p.descricao, p.foto, p.preco)
      ))
    );
  }

  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this._httpClient.post<Produto[]>(this.url, produto);  
  }

  getProduto(id: any): Observable<Produto> {
    const urlListarUm = `${this.url}/${id}`;
    return this._httpClient.get<any>(urlListarUm).pipe(
      map((p) => new Produto(p._id, p.produto, p.descricao, p.foto, p.preco))
    );
  }

  atualizarProduto(id: any, produto: Produto): Observable<Produto> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Produto>(urlAtualizar, produto);
  }

  excluirProduto(id: any): Observable<Produto[]> {
    const urlExcluir = `${this.url}/${id}`;
    return this._httpClient.delete<Produto[]>(urlExcluir);
  }
}