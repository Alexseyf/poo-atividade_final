import { Livro } from "./Livro";
import { Membro } from "./Membro";

export class Emprestimo {
    private livro: Livro;
    private membro: Membro;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
  
    constructor(livro: Livro, membro: Membro, dataEmprestimo: Date, dataDevolucao: Date) {
      this.livro = livro;
      this.membro = membro;
      this.dataEmprestimo = dataEmprestimo;
      this.dataDevolucao = dataDevolucao;
    }
  
    public getLivro(): Livro {
      return this.livro;
    }
  
    public getMembro(): Membro {
      return this.membro;
    }
  
    public getDataEmprestimo(): Date {
      return this.dataEmprestimo;
    }
  
    public getDataDevolucao(): Date {
      return this.dataDevolucao;
    }
  }