import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produto} from "../../model/produto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  URL_PRODUTOS = "http://localhost:3000/produtos"
  URL_CARRINHO = "http://localhost:3000/carrinho"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }


  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRODUTOS}/${id}`);
  }
}


