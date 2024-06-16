import { LivroServico } from "./servicos/LivroServico";
import { MembroServico } from "./servicos/MembroServico";
import { EmprestimoServico } from "./servicos/EmprestimoServico";
import { Livro } from "./classes/Livro";
import { Membro } from "./classes/Membro";
import PromptSync from "prompt-sync";

const livroServico = new LivroServico();
const membroServico = new MembroServico();
const emprestimoServico = new EmprestimoServico();
const prompt = PromptSync();

while (true) {
  console.log("Bem-vindo ao sistema de biblioteca!");
  console.log("O que você deseja fazer?");
  console.log("1 - Cadastrar livro");
  console.log("2 - Cadastrar membro");
  console.log("3 - Realizar empréstimo");
  console.log("4 - Listar livros");
  console.log("5 - Listar membros");
  console.log("6 - Listar empréstimos");
  console.log("7 - Sair");

 switch (prompt("Digite o número correspondente à ação desejada: ")){
    case "1":
      console.log("Você escolheu cadastrar um livro.");
      const isbn = prompt("Digite o ISBN do livro: ");
      const titulo = prompt("Digite o título do livro: ");
      const autor = prompt("Digite o autor do livro: ");
      const anoPublicacao = prompt("Digite o ano de publicação do livro: ");
      const livro = new Livro(
        titulo,
        autor,
        isbn,
        anoPublicacao as unknown as number
      );
      livroServico.adicionarLivro(livro);
      console.log("Livro cadastrado com sucesso!");
      break;
    case "2":
      console.log("Você escolheu cadastrar um membro.");
      const nome = prompt("Digite o nome do membro: ");
      const endereco = prompt("Digite o endereco do membro: ");
      const telefone = prompt("Digite o telefone do membro: ");
      const matricula = prompt("Digite a matrícula do membro: ");
      const membro = new Membro(
        nome,
        endereco,
        telefone,
        matricula as unknown as number
      );
      membroServico.adicionarMembro(membro);
      console.log("Membro cadastrado com sucesso!");
      break;
    case "3":
      console.log("A ser desenvolvida.");
      //DESENVOLVER LÓGICA DE EMPRÉSTIMO
      break;
    case "4":
      console.log("Você escolheu listar livros.");
      console.log(livroServico.listarLivros());

      break;
    case "5":
      console.log("Você escolheu listar membros.");
      console.log(membroServico.listarMembros());

      break;
    case "6":
      console.log("Você escolheu listar empréstimos.");
      console.log(emprestimoServico.listarEmprestimos());

      break;
    case "7":
      console.log("Você escolheu sair.");
process.exit();
    //   break;
    default:
      console.log("Opção inválida.");

      break;
  }
}
