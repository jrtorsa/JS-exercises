// Given two strings, write a function to determine if the second string is an anagram of the first.
// an angram is the a word, phrase, or name formed bi rearranging the letters of another, such as
// cinema, formed from iceman

// validAnagram('','') => true
// validAnagram('aaz','zza') => false
// validAnagram('anagram','nagaram') => true
// validAnagram('rat','car') => false
// validAnagram('qwerty','qeywrt') => true
// validAnagram('texttwisttime','timetwisttext') => true

function validAnagram(first, second){
    if(first.lenght !== second.lenght){
        return false
    }
    const lookup = {}

    for(let i = 0; i < first.lenght; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i =0; i < second.lenght; i++) {
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}