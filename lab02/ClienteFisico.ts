import { Cliente } from "./Cliente";

export class ClienteFisico extends Cliente {

    private idade: number;
    private salario: number;

    constructor(nome: string, idade: number, salario: number) {
        super(nome);
        this.idade = idade;
        this.salario = salario;
    }

    getMensalidade(): number {
        return this.idade < 60 ? this.salario * 0.10 : this.salario * 0.15;
    }

} 