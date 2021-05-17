import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {Produto} from "../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoFirestoreService {}

//   colecaoCarrinho: AngularFirestoreCollection;
//   NOME_COLECAO = 'carrinho'
//
//   constructor(private angularFireStore: AngularFirestore) {
//     this.colecaoCarrinho = angularFireStore.collection(this.NOME_COLECAO);
//   }
//
//   list(): Observable<Produto[]> {
//     // @ts-ignore
//     return this.colecaoCarrinho.valueChanges({idField: 'id'});
//   }
//
//   adicionarAoCarrinho(produto: Produto): Observable<void> {
//     let aux = produto;
//     const idProduto = aux.id;
//     delete aux.id;
//     aux.quantCarrinho = 1;
//     return from(this.colecaoCarrinho.doc(idProduto).set(Object.assign({}, aux)));
//   }
//
//   atualizarQuantidadeProdutoCarrinho(produto: Produto): Observable<void> {
//     const id = produto.id;
//     delete produto.id
//     produto.quantCarrinho++;
//     return from(this.colecaoCarrinho.doc(id).update(Object.assign({}, produto)));
//   }
//
//   removerCarrinho(id: string): Observable<void> {
//
//     return from(this.colecaoCarrinho.doc(id).delete());
//   }
// }
