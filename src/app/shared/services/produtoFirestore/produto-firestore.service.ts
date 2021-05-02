import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Produto} from "../../model/produto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  colecaoProdutos: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = "produtos"

  constructor(private angularFireStore: AngularFirestore) {
    this.colecaoProdutos = angularFireStore.collection(this.NOME_COLECAO);
  }

  list(): Observable<Produto[]> {
    return this.colecaoProdutos.valueChanges({idField: 'id'})
  }
}
