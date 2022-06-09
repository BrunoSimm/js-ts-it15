export class Moeda {
    constructor(private valor: number, private nome: string) { }

    get Valor(): number {
        return this.valor;
    }

    get Nome(): string {
        return this.nome;
    }

    equals(obj: Moeda): boolean {
        return this.Valor == obj.Valor;
    }
}