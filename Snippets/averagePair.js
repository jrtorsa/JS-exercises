// write a function called averagePair, given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equal the 
// target average. There may be more than one pair that matches the average target.

function averagePair(arr, num){
    let leftArr = 0;
    let rightArr = arr.length - 1;
    
    while(leftArr < rightArr){
        let average = (arr[leftArr] + arr[rightArr]) / 2;
        console.log(average)
        if(average === num){
            return true;
        } else if(average < num) {
            leftArr++;
        } else {
            rightArr--;
        }
    }return false;

}


// averagePair([1,2,3], 2.5) //True
averagePair([1,2,2,5,6,7,10,12,19], 8) //True
// averagePair([-1,0,3,4,5,6], 4.1) //False
// averagePair([], 4) //False