
const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

const ages = people.reduce(function (sum, person) {
    return sum.age + person.age;
});

console.log(ages); // <== NaN

// ES5:
const ages = people.reduce(function (sum, person) {
    return sum + person.age;
}, 0);

// ES6:
const ages = people.reduce((sum, person) => {
    return sum + person.age;
}, 0);

console.log(ages); // <== 142
