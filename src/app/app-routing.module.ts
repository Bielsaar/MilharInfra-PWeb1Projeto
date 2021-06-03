import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BaseComponent} from "./components/base/base.component";
import {CarrinhoListarComponent} from "./components/carrinho/carrinho-listar/carrinho-listar.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LoginComponent} from "./components/login/login/login.component";

const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoListarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
