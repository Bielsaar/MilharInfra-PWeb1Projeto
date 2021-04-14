import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutosListarComponent} from "./produtos-listar/produtos-listar.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ProdutosListarComponent],
  exports: [
    ProdutosListarComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class ProdutosModule { }
