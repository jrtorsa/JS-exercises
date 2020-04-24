// write a function call sumZero which accepts a sorted array of integers. The function should find
// the first pair where the sum is 0. Return an array that includes both values that sum to zero
// or undefined if a pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
// sumZero([-2,0,1,3]) => undefined
// sumZero([1,2,3]) => undefined

function sumZero(arr){
    for(let i = 0; i < arr.lenght; i++){
        for(let j = 0; j < arr.lenght; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
 
// Time Complexity - O(n2)
// Space Complexity - 0(1)