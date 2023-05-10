
// File: main.js
// Date: 5/24/2022
// this is EX 1 , pushed 5.9.23 // 


// ex1
// checking to see if ^ is  true statement if (typeof(array[i]== 'number'))
// const ex1 = () => {
//     const array = [1, '2', 3, 'test', 1.2];
//     console.log(countNumbers(array));
    
 //1st  pass the array, then u use ex 1 to test the array function


// ex2
const minNumber = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}



//
// Your functions here...

// ex1
// const countNumbers = (array) => {
//     console.log(array)
//     let numberCounter = 0;
//     for (let i=0; i < array.length; i++) {
//         if(typeof(array[i]) == 'number') numberCounter++;
//     } 
//     return numberCounter; 
// }

// const main = async () => {
//     ex1();
// }


// < is an operator
 // let a = 1;
    // let b = 2;
    // let c = 3; cant do this because array is primitive (cannot be changed)

// ^ this is camelCase (1st word is lowercase and second word is sentence case)
//retval is a function 
// iterate means to go thru; repeating a set of instructions over and over; we are looking a the # to determine what it is
// double equal is 

//main();
//
// ex2
const ex2 = () => {
   let array1 = [2, 11, 12, 22, 55, 1];
   let array2 = [-1, 80, 700];
        console.log(minNumber(array2));
}
ex2();

console.log("*".repeat(2));


// const ex3 = () => {
    // TODO...
// }
