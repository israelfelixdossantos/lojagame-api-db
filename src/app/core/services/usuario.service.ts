import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Usuario } from '../../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  url: string = 'http://localhost:8089/Usuarios';     

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  // getProdutos(): Observable<Produto[]> {
  //   return this._httpClient.get<Produto[]>(this.url);
  // }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario[]> {
    return this._httpClient.post<Usuario[]>(this.url, usuario);  
  }
}
