import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BaseComponent} from "./components/base/base.component";
import {CarrinhoListarComponent} from "./carrinho/carrinho-listar/carrinho-listar.component";

const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoListarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
