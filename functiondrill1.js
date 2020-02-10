function getYearOfBirth(age){
    return 2020 - age;
}

function createGreeting(name, age){
    const yearOfBirth = 2020 - age;
    return `Hello, my name is Bill and I am 50 and was born in the ${yearOfBirth}.`; 
}

const greeting1 = createGreeting();
console.log(greeting1);

