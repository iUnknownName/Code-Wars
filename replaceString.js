//Program to remove space from a string and return the entire string
const x = 'siawkiksawidkwai iasjawuijduajuw ijasiwjdijawi';

function noSpace(x){
    const splitString = x.split(' ');
    const joinChain = splitString.join('');
    return joinChain;
}

console.log(noSpace(x));