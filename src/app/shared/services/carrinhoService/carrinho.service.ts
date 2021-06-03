import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../../model/produto";
import {Carrinho} from "../../model/carrinho";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private httpClient: HttpClient) { }

  URL_CARRINHO = "http://localhost:8080/carrinho"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list(): Observable<Carrinho[]> {
    return this.httpClient.get<Carrinho[]>(this.URL_CARRINHO);
  }

  pesquisarProdutoCarrinhoPorId(id: number): Observable<Carrinho> {
    return this.httpClient.get<Carrinho>(`${this.URL_CARRINHO}/${id}`);
  }

  adicionarAoCarrinho(produto: Produto): Observable<Carrinho> {
    let aux = produto;
    let carrinho: Carrinho = {
      id : aux.id,
      nome : aux.nome,
      valor : aux.valor,
      descricaoSimples : aux.descricaoSimples,
      descricaoCompleta : aux.descricaoCompleta,
      imagem : aux.imagem,
      quantCarrinho : 0

    }
    carrinho.quantCarrinho = 1;
    return this.httpClient.post<Carrinho>(this.URL_CARRINHO, carrinho, this.httpOptions);
  }

  // atualizarProdutoCarrinho(produto: Produto): Observable<Produto> {
  //   produto.quantCarrinho++;
  //   return this.httpClient.put<Produto>(`${this.URL_CARRINHO}/${produto.id}`, produto);
  // }

  removerCarrinho(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CARRINHO}/${id}`);
  }

  atualizarQuantidadeProdutoCarrinho(produtoAux: Carrinho) {
    let produto = this.httpClient.get<Carrinho>(`${this.URL_CARRINHO}/${produtoAux.id}`).subscribe(e => produtoAux = e);
    produtoAux.quantCarrinho +=1;
    console.log(produtoAux);
    return this.httpClient.put<Carrinho>(`${this.URL_CARRINHO}/${produtoAux.id}`, produtoAux);
  }
}
