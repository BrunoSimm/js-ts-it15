/*
Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento 
encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos 
disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da 
função.
*/
function getMax(arr: number[]): number {
    let max: number = arr[0];
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

console.log(getMax([1, 52, 2, 121, 0]));

