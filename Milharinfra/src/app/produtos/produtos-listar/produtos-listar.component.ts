import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {ProdutoService} from "../../shared/shared/service/produto.service";

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.scss']
})
export class ProdutosListarComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.produtoService.list().subscribe(
      produtos => this.produtos = produtos
    );
  }

}
