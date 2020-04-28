// Write a function called sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits. You must have the following complexities
// Time: O(n)

function sameFrequency(a, b){
    let first = a.toString();
    let second = b.toString();

    if(first.length !== second.length){
        return false;
    } 
    let firstCount = {};
    let secondCount = {};
   
    for(let i = 0; i < first.length; i++){
        firstCount[first[i]] = (firstCount[first[i]] || 0) + 1;
//         console.log(firstCount)
    }
    

    for(let j = 0; j < second.length; j++){
        secondCount[second[j]] = (secondCount[second[j]] || 0) + 1
    }
    
    for(let key in firstCount){
        if(firstCount[key] !== secondCount[key]) return false;
    }

    return true;
}


sameFrequency(182,281)
sameFrequency(34,14) 
sameFrequency(3589578, 5879385)
sameFrequency(22,222) 