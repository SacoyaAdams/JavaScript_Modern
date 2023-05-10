
// File: main.js
// Created: 5/24/2022
// this is EX 2 and 3 , pushed 5.10.23 // 


// ex1
// checking to see if ^ is  true statement if (typeof(array[i]== 'number'))
// const ex1 = () => {
//     const array = [1, '2', 3, 'test', 1.2];
//     console.log(countNumbers(array));

//1st  pass the array, then u use ex 1 to test the array function


ex2
const minNumber = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}
"" = a container

ex3 : usage #1
const interleave = (ray1, ray2) => { 
    let result = ""
    if(ray1.length !== ray2.length){
    }
    for (let i=0; i < ray1.length; i++){
        result += ray1[i]
        result += ray2 [i]
    }
    return result 
}

// ex3 : usage #2
const interleave = (ray1, ray2) => {
    let result = ""
    if (ray1.length !== ray2.length) {
        return "Error: Array length mismatch"
    }
    for (let i = 0; i < ray1.length; i++) {
        result += ray1[i]
        result += ray2[i]
        //console.log('Error: Array length mismatch') 
    }
    return result
}


//
// Your functions here......................................................................

// ex1
// const countNumbers = (array) => {
//     console.log(array)
//     let numberCounter = 0;
//     for (let i=0; i < array.length; i++) {
//         if(typeof(array[i]) == 'number') numberCounter++;
//     } 
//     return numberCounter; 
// }



// < is an operator
// let a = 1;
// let b = 2;
// let c = 3; cant do this because array is primitive (cannot be changed)

// ^ this is camelCase (1st word is lowercase and second word is sentence case)
//retval is a function 
// iterate means to go thru; repeating a set of instructions over and over; we are looking a the # to determine what it is
// double equal is 


ex2
const ex2 = () => {
   let array1 = [2, 11, 12, 22, 55, 1];
   let array2 = [-1, 80, 700];
        console.log(minNumber(array2));
}
console.log("*".repeat(2));


const ex3 = () => {

    ex3 : usage #1

        let ray1 = [1, 2, 3, 4,5];
        let ray2 = ['a', 'b', 'c', 'd', 'e'];
        console.log(interleave(ray1, ray2));


    ex3 : usage #2

        let ray1 = [1, 2, 3];
        let ray2 = ['a', 'b', 'c', 'd', 'e'];
        console.log(interleave(ray1, ray2));

}

const main = async () => {
    // ex1();
    // ex2();
    ex3();
}

main();