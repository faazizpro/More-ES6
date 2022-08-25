const numbers = [12, 56, 87, 44]; 

const half = numbers.map(n => n /2);
const third = numbers.map(x => x/3);
const fourth = numbers.map(y => y/4);
// console.log(half, third, fourth);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom  Jerry'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);

const friendsLength = friends.map(length => length.length);
// console.log(friendsLength);

const products = [
    {id:1, name: 'mobile', price: 34000},
    {id:2, name: 'laptop', price: 234000},
    {id:3, name: 'watch', price: 64000},
    {id:4, name: 'tablet', price: 24000},
]

const items = products.map( product => product.name);
const prices = products.map(product => product.price);
console.log(prices);
