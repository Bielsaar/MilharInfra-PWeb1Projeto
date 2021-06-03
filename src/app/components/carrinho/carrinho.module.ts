import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoListarComponent } from './carrinho-listar/carrinho-listar.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CarrinhoListarComponent
  ],
  exports:[
    CarrinhoListarComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class CarrinhoModule { }
