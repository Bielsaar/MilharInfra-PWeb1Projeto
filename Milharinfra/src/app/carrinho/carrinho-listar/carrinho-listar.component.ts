import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {CarrinhoService} from "../../shared/shared/service/carrinhoService/carrinho.service";


@Component({
  selector: 'app-carrinho-listar',
  templateUrl: './carrinho-listar.component.html',
  styleUrls: ['./carrinho-listar.component.scss']
})
export class CarrinhoListarComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private carrinhoService: CarrinhoService) {

  }

  ngOnInit(): void {
    this.carrinhoService.list().subscribe(
      produtos => this.produtos = produtos
    );
  }

  implementar(produto: Produto) {

  }
}
