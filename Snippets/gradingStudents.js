// write a function that receives an array pf numbers. 
// you will round the numbers under this specs:
// given a number of 74, this will be rounded to 75, because 75 - 74 < 3
// for number 67, no rounded will occur, since 70 - 67 <= 3
//every number <= 38 no rounded will occur

// need to know the value of each number in a list 
// Need to know the number is > 0
// for every number in the list we will:
//check if the number =< 38, grade will stay the same
//ckech if remainder is => 3 then grade will be the same
// if remainder is  < 3 then round up to the next multiple of 5
//if any of the above fulfills

for(let i = 0; i < g.length; i++){
    let finalGrade = [];
    let grade = g[i];
    let reminder = grade % 10;
    if(grade < 38){
        finalGrade = grade;
    } else if(reminder === 3 || reminder === 8){
        finalGrade = grade + 2
    } else if(reminder === 4 || reminder === 9){
        finalGrade = grade + 1
    } else{
        finalGrade = grade;
    }
    console.log(grade,reminder, finalGrade)
} 

//73 //75
//67 //67
//38 //40
//33 //33