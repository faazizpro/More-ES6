const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(num => num % 2 === 0);
// console.log(bigNumbers);
// console.log(tiny);
// console.log(even);

const products = [
    {id:1, name: 'mobile', price: 34000},
    {id:2, name: 'laptop', price: 234000},
    {id:3, name: 'watch', price: 64000},
    {id:4, name: 'tablet', price: 24000},
]

const expensive = products.filter(product => product.price > 100000);
console.log(expensive);