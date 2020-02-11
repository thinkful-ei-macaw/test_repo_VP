function createGreeting( name, age) { 
    const yob= getyearOfbirth(age)
return `Hello, my name is ${name} My year of birth is ${yob}` ;
}
const myvalue=createGreeting ("Penelope", 15)
console.log(myvalue)
function getyearOfbirth ( age){
    return 2020 - age
}