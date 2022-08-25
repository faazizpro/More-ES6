const user = [
    {id: 1, name: 'fahad', job: 'web-developer'}
]

// console.log(user[0].name);

const data = {
    count: 500,
    data: [
        {id: 10, name: 'Abdul', job: 'SEO'},
        {id: 20, name: 'Aziz', job: 'D Marketer'}
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const userInfo = {
    id: 2301,
    name: 'Abdul Al Aziz',
    address: {
        street: {
            first: 'Banasree bock b road 5',
            second: 'second floor',
            third: 'left side'
        },
        postOffice: 'rampura',
        city: 'Dhaka'
    }
}

const userFloor = userInfo;
console.log(userFloor.address.stret?.third);

//এভাবে একটার পর একটা করে . দেওয়া কে বলে চেইনিং। আর ? দেওয়াকে বলে অপশনাল চেইনিং।