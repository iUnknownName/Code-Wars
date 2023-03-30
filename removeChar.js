//Program that removes the first and last characters from an array

const str = 'Ivan';
let newString = '';

function removeChar(str){
    newString = str.slice(1,-1);
    return newString;
   }


console.log(removeChar(str));


