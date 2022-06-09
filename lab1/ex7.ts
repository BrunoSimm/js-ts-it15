/*
Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em um 
determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no 
resultado da função. 
*/
function contaFrequencia(arr: number[]): Map<number, number> {
    let map: Map<number, number> = new Map<number, number>();
    arr.forEach((num: number) => {
        let freq: number = arr.filter((value) => value === num).length;
        map.set(num, freq);
    });
    return map;
}

let mapa: Map<number, number> = new Map<number, number>();
mapa = contaFrequencia([1, 1, 3, 4, 5, 1, 4]);

for (let entrada of mapa.entries()) {
    console.log(`Numero ${entrada[0]} - Frequencia: ${entrada[1]}`);
}