//
// File: main.js
// Date: 5/24/2022
// sacoya Adams

const ex1 = () => {
    const countNumbers=(array)=>{
        let numberCounter=0;
        for(let i = 0; i< array.length; i++) {
            if(typeof(array[i])== 'number') numberCounter++;

        }
        return numberCounter
    }
    
    const ex1=() => {}
    const testCaseArray1= [1, '2', 3, 'test', 1.2];
    
    console.log(countNumbers(testCaseArray1));
}

const ex2= () => {
    // TODo
const array = [12, 55, 2, 22, 11];
console.log(minNumber(array));
 
}

const ex3 = () => {
    // TODO...
   
// console.log(interleave(array1, array2));
}

//
// Your functions here...
//
const array1 = [1, 2, 3, 4, 5,];
const array2 = ['a', 'b', 'c', 'd', 'e'];
const interleave = (array1, array2) => {
    
    //if length of array1 and array2 is not the same, it will print out the string "ERROR: Array Length mismatch"
if(array1.length !== array2.length){
    return 'ERROR: Array Length mismatch'
}
let result = '';
for(let i= 0; i< array1.length; i++)
result += array1[i]+ array2[i]

return result
}
console.log(interleave(array1, array2));





const minNumber = (array)=> {
    let lowestNumber = array[0];
    for (let i= 0; i < array.length; i++){
    if(array[i] < lowestNumber){
        lowestNumber =array[i];
    }
   
}
return lowestNumber
}



const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    return retval;
}

const main = async () => {
    ex3();
}

main();
