class Pessoa {
    constructor(private nome: string, private idade: number) { }

    get Nome(): string {
        return this.nome;
    }

    get Idade(): number {
        return this.idade;
    }
}