'use strict';

function getYearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }        
  return 2020 - age;
}

function createGreeting(name, age){
  const yearOfBirth = getYearOfBirth(age);
  if(age === undefined || name === undefined){
    throw new Error('invalid input for age or name');
  } else if(typeof(age) === 'number' && typeof(name) === 'string'){
    return `Hello, my name is ${name} and I am ${age} and was born in the ${yearOfBirth}.`; 
  }
    
}


try {
  const greeting1 = createGreeting();
} catch(e){
  console.log(e);
} 

console.log(createGreeting('Bill', 59));



