import {Produto} from "./produto";

export class Usuario{
  id: number;
  nome: string;
  sobrenome: string;
  nascimento: string;
  telefone: string
  sexo: string;
  cep: string;
  carrinho: Array<Produto>;
  pedidos: Array<Produto>;
}
