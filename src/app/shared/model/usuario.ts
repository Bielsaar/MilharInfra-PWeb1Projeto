import {Produto} from "./produto";

//TODO Usuario correto baseado no sistema com carrinho e login
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
