import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { CadastrarProdutoComponent } from './admin/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './admin/editar-produto/editar-produto.component';
import { PaginaProdutoComponent } from './public/pagina-produto/pagina-produto.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastrar-produto', component: CadastrarProdutoComponent},
  {path:'listar-produtos', component: ListarProdutoComponent},
  {path:'editar-produtos/:id', component: EditarProdutoComponent},
  {path:'pagina-produto/:id', component: PaginaProdutoComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
