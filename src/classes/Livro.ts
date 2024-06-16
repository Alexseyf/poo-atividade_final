export class Livro {
    private _titulo: string;
    private _autor: string;
    private _isbn: string;
    private _anoPublicacao: number;
  
    constructor(titulo: string, autor: string, isbn: string, anoPublicacao: number) {
      this._titulo = titulo;
      this._autor = autor;
      this._isbn = isbn;
      this._anoPublicacao = anoPublicacao;
    }
  
    public getTitulo(): string {
      return this._titulo;
    }
  
    public getAutor(): string {
      return this._autor;
    }
  
    public getIsbn(): string {
      return this._isbn;
    }
  
    public getAnoPublicacao(): number{
      return this._anoPublicacao;
    }
  }