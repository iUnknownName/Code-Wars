//Your task is to write a function that takes a String 
//and returns an Array/list with the length of each word added to each element.

const str = 'Ivan Felipe';

function addLength(str){
    const SplitStrings = str.split(' ');
    const newStr = SplitStrings.map(word => word + ': ' + word.length);
    return newStr;

    //const newStr = (str) => str.split(' ').map(word => `${word} ${word.length}`);
    //return newStr;

    /*const words = str.split(' ');
    return words.map(word => `${word} ${word.length}`);*/
}

console.log(addLength(str));