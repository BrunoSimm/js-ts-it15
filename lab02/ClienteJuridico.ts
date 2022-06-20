import { Cliente } from "./Cliente";

export class ClienteJuridico extends Cliente {

    private mensalidade: number;

    constructor(nome: string, mensalidade: number) {
        super(nome);
        this.mensalidade = mensalidade;
    }

    getMensalidade(): number {
        return this.mensalidade;
    }

} 