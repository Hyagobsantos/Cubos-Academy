const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

original.filter(x => {
    x % 2 == 0 ? pares.push(x) : impares.push(x)
})

console.log(pares)
console.log(impares)

