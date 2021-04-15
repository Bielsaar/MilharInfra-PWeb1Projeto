import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private httpClient: HttpClient) { }

  URL_CARRINHO = "localhost:3000/carrinho"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_CARRINHO);
  }

  adicionar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_CARRINHO, produto, this.httpOptions);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CARRINHO}/${id}`);
  }

}
