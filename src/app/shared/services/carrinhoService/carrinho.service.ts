import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private httpClient: HttpClient) { }

  URL_CARRINHO = "http://localhost:3000/carrinho"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_CARRINHO);
  }

  pesquisarProdutoCarrinhoPorId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_CARRINHO}/${id}`);
  }

  adicionarAoCarrinho(produto: Produto): Observable<Produto> {
    let aux = produto;

    aux.quantCarrinho = 1;
    return this.httpClient.post<Produto>(this.URL_CARRINHO, aux, this.httpOptions);
  }

  atualizarProdutoCarrinho(produto: Produto): Observable<Produto> {
    produto.quantCarrinho++;
    return this.httpClient.put<Produto>(`${this.URL_CARRINHO}/${produto.id}`, produto);
  }

  removerCarrinho(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_CARRINHO}/${id}`);
  }

}
