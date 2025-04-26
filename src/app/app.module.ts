import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './public/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './public/login/login.component';
import { CadastrarProdutoComponent } from './admin/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './admin/editar-produto/editar-produto.component';
import { PaginaProdutoComponent } from './public/pagina-produto/pagina-produto.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CadastrarProdutoComponent,    
    ListarProdutoComponent, 
    EditarProdutoComponent, PaginaProdutoComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
