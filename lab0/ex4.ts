/* 
Escreva uma função pow(x,y) que calcula o valor de 𝑥𝑦, ou seja, x elevado a potência y. 
Assuma que os valores de x e y são números inteiros não negativos e que 𝑥0=1 para qualquer valor de x. 
Apresente uma versão iterativa e uma versão recursiva para a função. Não utilize o operador **. 
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
*/
function powIterativo(x: number, potencia: number): number {
    if (potencia === 0) {
        return 1;
    }

    x = Math.abs(x); //"Assuma que os valores de x e y são números inteiros não negativos"
    potencia = Math.abs(potencia); // "Assuma que os valores de x e y são números inteiros não negativos"

    let total: number = 0;
    for (let index = 1; index < potencia; index++) {
        total += x * x;
    }
    return total;
}

function powRecursivo(x: number, potencia: number): number {
    if (potencia !== 0) {
        x = Math.abs(x); //"Assuma que os valores de x e y são números inteiros não negativos"
        potencia = Math.abs(potencia); // "Assuma que os valores de x e y são números inteiros não negativos"
        return x * powRecursivo(x, potencia - 1);
    } else {
        return 1;
    }
}

console.log(powIterativo(-2, 3));

console.log(powRecursivo(-2, 3));