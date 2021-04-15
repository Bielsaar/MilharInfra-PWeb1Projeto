import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {ProdutoService} from "../../shared/shared/service/produtoService/produto.service";
import {CarrinhoService} from "../../shared/shared/service/carrinhoService/carrinho.service";

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.scss']
})
export class ProdutosListarComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService) {

  }

  ngOnInit(): void {
    this.produtoService.list().subscribe(
      produtos => this.produtos = produtos
    );
  }

  adicionarAoCarrinho(produto: Produto): void{

    this.produtoService.adicionarAoCarrinho(produto).subscribe(
      produto => console.log(produto)
    )
  }
}
