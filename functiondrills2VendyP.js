'use strict';

//function to create Jedi name
function jediName(firstName, lastName){
  return `"${lastName.slice(0,3)}`+`${firstName.slice(0,2)}"`; 
}




//function for infinity
function beyond(num){
  if(!isFinite(num) &&  !(num > 0 || num < 0)){
    console.log('And beyond');
  } else if(isFinite(num) && num >0){
    console.log('To infinity');
  } else if(isFinite(num) && num < 0){
    console.log('To negative infinity');
  } else if(num === 0){
    console.log('Staying home');
  }
}


//cracking the code
function decode(word){

  let strArray = word.split('');

  for(let i = 0; i < strArray.length; i++){
    //check if strArray is either a b c d
    if(strArray[i] !== 'a' && strArray[i] !== 'b' && strArray[i] !== 'c' && strArray[i] !== 'd'){
      //if strArray is not any leave it with a space
      strArray[i] = ' ';
    } else if(strArray[i] === 'a'){
      strArray[i] = 2;
    } else if(strArray[i] === 'b'){
      strArray[i] = 3;
    } else if(strArray[i] === 'c'){
      strArray[i] = 4;
    } else if(strArray[i] === 'd'){
      strArray[i] = 5;
    }
  }
  return strArray;
}
//console.log(decode('craft block argon meter bells brown croon droop'));

//How many days in a month 
function daysInMonth(month, leapYear){

  let result;

  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result =  31;
    break;
  case 'February':
    if(leapYear === true){
      result = 28;
    } else{
      result = 29;
    }
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = 30;
    break;
  default:
    throw new Error('Must provide a valid month.');
    
  }
  return `${month} has ${result} days.`;
}

//console.log(daysInMonth('April', false));



// //Rock paper scissors
function rockPaperScissors(handNumber){

  if(handNumber > 3 || handNumber < 1){
    throw new Error('Provide 1,2,3.');
  }
  //generate random number, the computer's hand
  const randomNo = Math.floor(Math.random() * 3) + 1;


  if(handNumber === randomNo){
    return 'this is a tie';
  } else if(handNumber === 1 && randomNo === 3){
    return 'the user played rock and the computer played scissors, user WINS!';
  } else if(handNumber === 2 && randomNo === 1){
    return 'the user played paper and computer played rock, user WINS!';
  } else if(handNumber === 3 && randomNo === 2){
    return 'the user played scissors and the computer played paper, user WINS!';
  } else{
    return 'the computer wins!';
  }
}

console.log(rockPaperScissors(3));
