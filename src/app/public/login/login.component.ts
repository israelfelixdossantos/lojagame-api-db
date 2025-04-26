import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostrarCadastro = false;
  public usuario : Usuario = new Usuario('', '', '', [], []);

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {}

  toggleCadastro() {
    this.mostrarCadastro = !this.mostrarCadastro;
    console.log('mostrarCadastro:', this.mostrarCadastro);
  }

  cadastrar(): void {
    this._usuarioService.cadastrarUsuario(this.usuario).subscribe(
      (usuario) => {
        this.usuario = new Usuario('', '', '', [], []);
        alert('Cadastro Efetuado com sucesso');
        console.log('Cadastro Efetuado com sucesso', usuario);
      },(err) => {alert('Erro ao Cadastrar');}
    );
    this._router.navigate(['/home']);
  }
}