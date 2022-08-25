const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(number => number % 5 === 0);
const fiveAll = numbers.filter(number => number % 5 === 0);
console.log(fives);
console.log(fiveAll);

const products = [
    {id:1, name: 'mobile', price: 34000},
    {id:2, name: 'laptop', price: 234000},
    {id:3, name: 'watch', price: 64000},
    {id:4, name: 'tablet', price: 24000},
]

const productFind = products.find(product => product.price > 30000);
console.log(productFind);