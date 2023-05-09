/
// File: main.js
// Date: 5/24/2022
// this is EX 1 , pushed 5.9.23 // 


      // checking to see if ^ is  true statement if (typeof(array[i]== 'number'))
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
    
 //1st  pass the array, then u use ex 1 to test the array function
}



// const ex2 = () => {
//     for (let minNumber = 2; minNumber < 3; minNumber++) {
//     console.log(minNumber); 
// }
// console.log("*".repeat(2));
// }
   

// const ex3 = () => {
    // TODO...
// }

//
// Your functions here...
//

const countNumbers = (array) => {
    console.log(array)
    let numberCounter = 0;
    for (let i=0; i < array.length; i++) {
        if(typeof(array[i]) == 'number') numberCounter++;
    } 
    return numberCounter; 
}

const main = async () => {
    ex1();
}


// < is an operator
 // let a = 1;
    // let b = 2;
    // let c = 3; cant do this because array is primitive (cannot be changed)

// ^ this is camelCase (1st word is lowercase and second word is sentence case)
//retval is a function 
// iterate means to go thru; repeating a set of instructions over and over; we are looking a the # to determine what it is
// double equal is 

main();