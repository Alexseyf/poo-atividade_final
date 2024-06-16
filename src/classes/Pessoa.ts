export abstract class Pessoa {
    private _nome: string;
    private _endereco: string;
    private _telefone: string;
  
    constructor(nome: string, endereco: string, telefone: string) {
      this._nome = nome;
      this._endereco = endereco;
      this._telefone = telefone;
    }
  
    public getNome(): string {
      return this._nome;
    }
  
    public getEndereco(): string {
      return this._endereco;
    }
  
    public getTelefone(): string {
      return this._telefone;
    }
  }
  