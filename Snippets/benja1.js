// const array = [1,2,3,4];
// for(var i = 0; i < array.length; i++){
//     setTimeout(function(){
//         console.log('I am at index' + i)
//     }, 3000)
// }

const array = [1,2,3,4];
for(let i = 0; i < array.length; i++){
    setTimeout(function(){
        console.log('I am at index ' + i)
    }, 3000)
}

function a(){
    let grandpa = 'grandpa';
    console.log(father)
    return function b(){
        let father = 'father';
        return function c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`  
        }
    }
}

a()()()