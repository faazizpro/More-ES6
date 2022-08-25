// Recap of ES6
//1. Var, Let, Const
//Break up with var

const numbers = [10, 20, 30];
numbers = [38];
// We can't reassign const⬆️⬆️⬆️

let result = [120, 34];
result = [46];
//We can reassign let.

//2. default parameter:
function calculateSalary(salary, tax = .25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining - bonus;
    return total;
}

//3. Template String
const elementHtml = `
    <h3>Name:</h3>
    <p>Address:</p>
    <p>Salary: ${calculateSalary(12000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
`


//4. Arrow Function:
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary* tax + bonus;

//5. Spread:
const ages = [10, 20, 30, 40 ,50];
const newAges = [...ages, 22, 45, 33, 31];

//6. Destructuring 
const {x, y, ...c} = {x: 45, y: 12, z: 33, name: 'Fahad Abdul Aziz', salary: 120000}
//এভাবে শেশে ...c দিলে এক্স ও ওয়াই এর এর পর থেকে বাকি সব চলে আসবে।

