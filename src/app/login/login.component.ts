import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mostrarCadastro = false;

  toggleCadastro() {
    this.mostrarCadastro = !this.mostrarCadastro;
    console.log('mostrarCadastro:', this.mostrarCadastro);
  }

}
