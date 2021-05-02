import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BaseComponent} from "./components/base/base.component";
import {CarrinhoListarComponent} from "./carrinho/carrinho-listar/carrinho-listar.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
