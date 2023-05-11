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
}

const ex4 = () => {
    //ToDo
    let word = "radar";
    //let word2 = "month";
    console.log(palindrome('radar'));
    console.log(palindrome('month')); 
    //This is a test console.log(palindrome('mom'));
    console.log(palindrome('house'));
}

//
// Your functions here...
//

const palindrome = (word)=> {
    for(let i=0; i<word.length; i++){
        if(word[i]== word[word.length-1-i]){
            return true
        }
        else{
            return false
        }
    }
}


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
    ex4();
}

main();
