const  x = ['a', 3];

/*let subArray = new Array(5).fill([3,2]);

console.log(subArray);*/

function arrayArrayArray(x){
    let subArray = [];
    let points = 0;

    if(typeof x[0] !== 'number' && typeof x[1] !== 'number'){
        return 'Void!'
        //console.log('Void!');

    }else if (typeof x[0] === 'number'  && typeof x[1] === 'number') {
        points = x[0] + x[1];
        subArray = new Array(12).fill([9,3]);
        console.log("Your score is: " + points + "\n");
        //console.log(subArray);
        return subArray;
        
    }else if(typeof x[0] !== 'number' && typeof x[1] === 'number'){
        points = x[1];
        subArray = new Array(3).fill(['a',3]);
        console.log("Your score is: " + points + "\n");
        //console.log(subArray);
        return subArray;
    }

    //return subArray;
}
console.log(arrayArrayArray(x));
//console.log(arrayArrayArray);

/*function explode(x){
    let points = 0
    let subArray = [];

    if((typeof x[0] !== 'number') && (typeof x[1] !== 'number')){
        return 'Void!'
    }else if((typeof x[0] === 'number') && (typeof x[1] === 'number')){
        points = x[0] + x[1];
    }else if((typeof x[0] !== 'number') && (typeof x[1] === 'number')){
        points = x[1];
    }
    for (let index = 0; index < points; index+= 1) {
        subArray.push(x);
        console.log(subArray);
        
        
    }

    return subArray;
    
}

explode(x);
//console.log(subArray);*/