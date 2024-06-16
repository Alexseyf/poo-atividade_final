import { Livro } from "../classes/Livro";

export class LivroServico {
    private livros: Livro[];

    constructor() {
      this.livros = [];
    }
  
    public adicionarLivro(livro: Livro): void {
      this.livros.push(livro);
    }
  
    public listarLivros(): Livro[] {
      return this.livros;
    }

    public removerLivro(titulo: string): Livro | undefined {
        return this.livros.find(livro => livro.getTitulo() === titulo);
      
    }
  }

  
  // 1. **Cadastro de Livros**
  // - Adicionar novo livro (com atributos como título, autor, ISBN, ano de publicação). --- OK
  // - Listar todos os livros cadastrados. --- OK
  // - Atualizar informações de um livro. --- TO DO
  // - Remover um livro do cadastro. --- TO DO