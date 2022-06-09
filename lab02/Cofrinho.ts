class Cofrinho {

    private moedas: Moeda[] = new Array();

    constructor() { }

    adicionar(m: Moeda): void {
        this.moedas.push(m);
    }

    calcularTotal(): number {
        return this.moedas.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.Valor, 0);
    }

    getValorMenorMoeda(): number {
        let menor: number = this.moedas[0].Valor;
        this.moedas.forEach(moeda => {
            if (moeda.Valor < menor) {
                menor = moeda.Valor;
            }
        });
        return menor;
    }

    getMenorMoeda(): Moeda {
        let menorMoeda: Moeda = this.moedas[0];
        this.moedas.forEach(moeda => {
            if (moeda.Valor < menorMoeda.Valor) {
                menorMoeda = moeda;
            }
        });
        return menorMoeda;
    }

    getFrequenciaMoedas(): Map<string, number> {
        let map: Map<string, number> = new Map<string, number>();
        this.moedas.forEach((moeda: Moeda) => {
            let freq: number = this.moedas.filter((moedaFilter) => moedaFilter.Valor === moeda.Valor).length;
            map.set(moeda.Nome, freq);
        });
        return map;
    }
}

import { Moeda } from "./Moeda";

let cof: Cofrinho = new Cofrinho();
let m1: Moeda = new Moeda(1, "1 real");
let m2: Moeda = new Moeda(0.5, "50 cents");
let m3: Moeda = new Moeda(0.25, "25 cents");
let m4: Moeda = new Moeda(0.5, "50 cents");
cof.adicionar(m1);
cof.adicionar(m2);
cof.adicionar(m3);
cof.adicionar(m4);

console.log(cof.calcularTotal());

console.log(JSON.stringify(cof));

console.log(cof.getFrequenciaMoedas());