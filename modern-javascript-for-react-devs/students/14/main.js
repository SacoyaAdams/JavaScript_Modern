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

const ex2 = () => {
    // TODO...
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    return retval;
}

const main = async () => {
    ex1();
}

main();
