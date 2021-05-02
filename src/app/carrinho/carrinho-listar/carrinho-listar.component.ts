import { Component, OnInit } from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {CarrinhoService} from "../../shared/services/carrinhoService/carrinho.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CarrinhoFirestoreService} from "../../shared/services/carrinhoFirestore/carrinho-firestore.service";


@Component({
  selector: 'app-carrinho-listar',
  templateUrl: './carrinho-listar.component.html',
  styleUrls: ['./carrinho-listar.component.scss']
})
export class CarrinhoListarComponent implements OnInit {

  carrinho: Array<Produto>;

  constructor(private carrinhoService: CarrinhoFirestoreService, private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.carrinhoService.list().subscribe(
      produtos => this.carrinho = produtos
    );
  }

  removerDoCarrinho(produto: Produto) {
    this.carrinhoService.removerCarrinho(produto.id).subscribe(
      value => {
        const indxProdutoARemover = this.carrinho.findIndex(p => p.id === produto.id);
        if (indxProdutoARemover > -1) {
          this.carrinho.splice(indxProdutoARemover, 1);
        }
      }
    )
  }
}
