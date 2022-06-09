/*
Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e 
retorna a mesma string com a primeira letra em maiúscula. 
Utilize corretamente a declaração de tipos nos 
parâmetros e no resultado da função.
*/

function toMaiusculaPrimeira(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

console.log(toMaiusculaPrimeira("teste sda"));