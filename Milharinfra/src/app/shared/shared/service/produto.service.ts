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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }

  create(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto, this.httpOptions);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRODUTOS}/${id}`);
  }
}


