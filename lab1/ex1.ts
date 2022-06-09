let inicio: number = 0;
let final: number = 100;

for (let i = inicio; i <= final; i++) {
    if (i % 2 == 0) {
        console.log(`Par = ${i}`);
    }
}

console.log("\n**************************************\n")

while (inicio <= final) {
    if (inicio % 2 == 0) {
        console.log(`Par = ${inicio}`);
    }
    inicio++;
}