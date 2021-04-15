import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/model/produto";

@Component({
  selector: 'app-carrinho-listar',
  templateUrl: './carrinho-listar.component.html',
  styleUrls: ['./carrinho-listar.component.css']
})
export class CarrinhoListarComponent implements OnInit {
  produtos: Array<Produto>;

  constructor() { }

  ngOnInit(): void {
  }

}
