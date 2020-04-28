// write a function calle Same, which accepts two arrays. The function should return true if every value in
// the array has its corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4, 1, 9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,3], [4,4,1]) => false (must be the same frequency)

// Naive Solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}   