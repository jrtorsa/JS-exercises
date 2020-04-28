// Implement a function called, areThereDuplicates which accepts a variable number of arguments
// and checks, wether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointer pattern.

function areThereDuplicates(){
   
    let collection = {};

    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection){
        if(collection[key] > 1) return true;
    }
    return false;
}

areThereDuplicates(1,2,3,4);


// areThereDuplicates(1,2,3) // False
// areThereDuplicates(1,2,2) // True
// areThereDuplicates('a', 'b', 'c', 'a') //True