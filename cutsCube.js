function countSquares(cuts){
    //let totalCubes = 0;
    if (cuts === 0) {
        return 1;
    }else if(cuts > 0){
         totalCubes = (cuts + 1) ** 3 - (cuts - 1) ** 3;
         return totalCubes;
         //console.log(totalCubes);
    }
    //return console.log("Hola");
}

console.log(countSquares(4));


