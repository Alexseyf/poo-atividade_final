import { Emprestimo } from "../classes/Emprestimo";
import { Livro } from "../classes/Livro";
import { Membro } from "../classes/Membro";

export class EmprestimoServico {
    private emprestimos: Emprestimo[];
  
    constructor() {
      this.emprestimos = [];
    }
  
    public adicionarEmprestimo(): void {
      const dataRetirada = new Date();
      const dataDevolucao = new Date(dataRetirada.getTime() + 7 * 24 * 60 * 60 * 1000);
      // ????
    }
  
    public listarEmprestimos(): Emprestimo[] {
      return this.emprestimos;
      // ativos ????
    }

    public buscarEmprestimoPorLivro(livro: Livro): Emprestimo | undefined {
        return this.emprestimos.find(emprestimo => emprestimo.getLivro().getIsbn() === livro.getIsbn());
    }
  }

  // 3. **Gerenciamento de Empréstimos**
  //   - Realizar empréstimo de um livro para um membro (registrar data de empréstimo e data de devolução).
  //   - Listar todos os empréstimos ativos.
  //   - Registrar devolução de um livro.
  //   - Listar histórico de empréstimos. --- OK
