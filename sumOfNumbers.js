//Program that adds 2 numbers within the array with the for loop

const nums = [1 , 2 , 3 , 4 , 5];

const newArrayNums = [];



/*for (let index = 0; index < nums.length - 1; index+= 1) {
    const sumResult = nums[index] + nums[index + 1];
    newArrayNums.push(sumResult);
    }

    console.log(newArrayNums);*/

nums.forEach((_,index) => { 
    if ( index < nums.length - 1 ){
    const sumResult = nums[index] + nums[index + 1];
    newArrayNums.push(sumResult);
}
});

console.log(newArrayNums);
//foreach dosen't return 



