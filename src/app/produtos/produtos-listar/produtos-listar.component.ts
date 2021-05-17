import {Component, OnInit} from '@angular/core';
import {Produto} from "../../shared/model/produto";
import {ProdutoService} from "../../shared/services/produtoService/produto.service";
import {CarrinhoService} from "../../shared/services/carrinhoService/carrinho.service";
import {MensagemService} from "../../shared/services/mensagemService/mensagem.service";
import {Carrinho} from "../../shared/model/carrinho";

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.scss']
})
export class ProdutosListarComponent implements OnInit {

  produtos: Array<Produto>;
  carrinhoAux: Array<Carrinho>;

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService,
              private mensagemService: MensagemService) {

  }

  ngOnInit(): void {
    this.produtoService.list().subscribe(
      produtos => this.produtos = produtos
    );
    this.carrinhoService.list().subscribe(
      carrinho => this.carrinhoAux = carrinho
    );
  }

  adicionarAoCarrinho(produto: Produto): void {
    let verificar = this.carrinhoAux.findIndex(p => p.id === produto.id);

    if (verificar > -1) {
      let produtoAux = this.carrinhoAux[verificar]
      this.carrinhoService.atualizarQuantidadeProdutoCarrinho(produtoAux).subscribe(
        value => {
          this.carrinhoAux[verificar] = value;
          this.mensagemService.success(`Produto "${produto.nome}" adicionado ao carrinho com sucesso!`)
          console.log("Atualizado com sucesso!", value);
        })
    } else {
      this.carrinhoService.adicionarAoCarrinho(produto).subscribe(
        prod => {
          console.log(prod);
          this.mensagemService.success(`Produto "${produto.nome}" adicionado ao carrinho com sucesso!`)
          console.log("Adicionado com sucesso!", produto);
          this.carrinhoAux.push(prod)
        }
      )
    }

  }
}
