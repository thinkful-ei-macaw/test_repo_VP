'use strict';


/***Multiple functions within uncomment to see functionality of each drill***/

// //functions as arguments 1
// function repeat(fn, n){
//   for(let i = 0; i < n; i++){
//     fn();
//   }
// }

// function hello(){
//   console.log('Hello world');
// }

// function goodbye(){
//   console.log('Goodbye world');
// }

// console.log(repeat(hello, 5));
// console.log(repeat(goodbye, 5));


// //function as arguments 2
// function filter(arr, fn) {
//   // TASK: Define your function here
//   let newArray = [];
//   for(let i = 0; i < arr.length; i++){
//     if(fn(arr[i]) === true){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// console.log(filter(myNames, (x) => x === 'Joe' ));


// //functions as return values
// function hazardWarningCreator(typeOfWarning){

//   let warningCounter = 0;
//   //closure
//   return function(location){
//     warningCounter++;
//     console.log(`Danger! ${typeOfWarning} hazard at ${location}`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`);
//   };

// }

// //const naming the anon function
// const stormy = hazardWarningCreator('storm');
// const rainy = hazardWarningCreator('flood');

// stormy('Colorado');
// stormy('NY');
// stormy('Cali');
// rainy('japan');
// rainy('thailand');

//function forEach, filter, and map
// function turtleSteps(arr){
//   return arr.filter(x => {
//     if(x[0] < 0 || x[1] < 0){
//       return false; 
//     } 
//     return true;
//   }).map(x => x[0] + x[1]).forEach((x,y) => {if(x === 1){
//     console.log(`Movement #${y + 1}: ${x} step.`);
//   } else{
//     console.log(`Movement #${y + 1}: ${x} steps.`);
//   }
// });
// }


// console.log(turtleSteps([[0, 1], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));

//reduce
function learnReduce(str){

  // let acc = '';
  // let strArray = str.split(' ');
  // for (let i = 0; i < strArray.length; i++) {
  //   let cur = strArray[i];
  //   if(cur.length === 3){
  //     acc += ' ';
  //   } else{
  //     acc += cur[cur.length-1].toUpperCase();
  //   }
  // }
  // return acc;


  return str.split(' ').reduce((acc, cur) => {
    if(cur.length === 3){
      return acc + ' ';
    } else{
      return acc + cur[cur.length-1].toUpperCase();
    }
  }, '');

}
let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

console.log(learnReduce(str));