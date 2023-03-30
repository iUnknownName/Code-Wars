const array = [20 , 30 , 40 , 50 , 60 , 70];

function rowWeights(array){
    let firstTeam = 0;
    let secondTeam = 0;
    let totalWeights = [];

    for (let index = 0; index < array.length; index+= 1) {
        if(index % 2 === 0){
            firstTeam += array[index];
        } else{
            secondTeam += array[index];
        }
        
    }

    totalWeights.push(firstTeam , secondTeam);
    console.log('The total weight of the equipment is: ');
    console.log(totalWeights);
    return totalWeights;
}

rowWeights(array);
//console.log(rowWeights);