export abstract class Cliente {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    abstract getMensalidade(): number;

    toString() {
        return `Nome: ${this.nome} - Mensalidade: ${this.getMensalidade()}`
    }
} 