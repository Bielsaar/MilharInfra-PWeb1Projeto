import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoListarComponent } from './carrinho-listar/carrinho-listar.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CarrinhoListarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CarrinhoModule { }
