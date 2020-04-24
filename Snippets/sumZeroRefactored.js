function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
//     console.log(right)
    while(left < right){
        let sum = arr[left] + arr[right];
//         console.log(arr[left], arr[right])
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// Time Complexity - O(n)
// Space Complexity - O(1)

sumZero([-4,-3,-2,-1,0,1,2,5])
