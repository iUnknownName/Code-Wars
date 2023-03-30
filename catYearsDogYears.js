var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    let respectiveAges = [];

    if(humanYears === 1){
        catYears = 15;
        dogYears = 15;
    }else if(humanYears === 2 ){
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }else if(humanYears > 2){
        catYears = 24 + (humanYears - 2) * 4;
        dogYears = 24 + (humanYears - 2) * 5;
    }
    respectiveAges.push(humanYears , catYears , dogYears);
    return respectiveAges;
  }

  console.log(humanYearsCatYearsDogYears(4));