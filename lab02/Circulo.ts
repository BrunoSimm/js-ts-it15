class Circulo {
    constructor(private raio: number, private ponto_central: [number, number]) {
    }

    calcularArea(): number { //método
        return Math.PI * this.raio ** 2;
    }

    get Comprimento(): number { //Propriedade
        return this.raio * 2;
    }
}

let c: Circulo = new Circulo(5, [5, 10]);
console.log(c.Comprimento);
console.log(c.calcularArea());
