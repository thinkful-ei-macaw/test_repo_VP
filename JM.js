function createGreeting( name, age) { 
    const yob= getyearOfbirth(age)
return `Hello, my name is ${name} My year of birth is ${yob}` ;
}
const myvalue=createGreeting ("Penelope", -29)
console.log(myvalue)
function getyearOfbirth ( age){
    if (age< 0){
        throw new TypeError("arguments not invalid")
        
    }
    return 2020 - age
}