let x: number = 10;
let y: number = -2;

function min(x: number, y: number): number {
    if (x <= y) return x;
    if (y <= x) return y;
}

console.log(min(y, x));