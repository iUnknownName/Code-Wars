/*const  numbers = [3 , 1 , 2];

function isPrime (n){
    for (let index = 2; index < n ; index+= 1) {
        if (n % index === 0) {
            return false;
        }
     }

     return true;
}*/

/*function miniumNumber(numbers){
    let counter = 0;
    let sumPrimeNumber = numbers.reduce((a,b) => a + b);

    if(isPrime(sumPrimeNumber)){
        return 0;
    }

    while(!isPrime(sumPrimeNumber)){
        sumPrimeNumber += 1;
        counter += 1;
    }

    return counter;
}

miniumNumber(numbers);
console.log(miniumNumber);*/

function isPrime (n) {
    for (let index = 2; index < n; index +=1) {
      if (n % index === 0) {
        return false;
      }
    }
    return true;
  }
  
  function minimumNumber(numbers) {
    let primeNumber = 0;
    let counter = 0;
    numbers.forEach(function(addNumbers) {
        counter += addNumbers;
    });
  
    if (isPrime(totalSum)){
        return 0;
    }
    
    while(!isPrime(counter)) {
        counter += 1;
        primeNumber += 1;
      }
      return primeNumber;
        
  }

  minimumNumber([3,1,2]);