import { Pessoa } from "./Pessoa";

export class Membro extends Pessoa {
    private _matricula: number;
    private isUser: boolean = true;
    private isAdmin: boolean = false;
  
    constructor(nome: string, endereco: string, telefone: string, matricula: number) {
      super(nome, endereco, telefone);
      this._matricula = matricula;
    }
  
    public getMatricula(): number {
      return this._matricula;
    }
  }