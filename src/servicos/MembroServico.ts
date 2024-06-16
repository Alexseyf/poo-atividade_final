import { Membro } from "../classes/Membro";

export class MembroServico {
    private membros: Membro[];
  
    constructor() {
      this.membros = [];
    }
  
    public adicionarMembro(membro: Membro): void {
      this.membros.push(membro);
    }
  
    public listarMembros(): Membro[] {
      return this.membros;
    }

    public removerMembro(matricula: number): Membro | undefined {
        return this.membros.find(membro => membro.getMatricula() === matricula);
    }
  }

  // 2. **Cadastro de Membros**
  //   - Adicionar novo membro (com atributos como nome, número de matrícula, endereço, telefone). --- OK
  //   - Listar todos os membros cadastrados. --- OK
  //   - Atualizar informações de um membro. --- TO DO
  //   - Remover um membro do cadastro. --- TO DO