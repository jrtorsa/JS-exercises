function countDown(num){
    if(num <= 0){
        console.log('All is Done!');
        return;
    }
    console.log(num)
    num--;
    countDown(num);
}

countDown(3)

//Explanation:
// Print 3
// countDown (2)
// print 2
// countDown(1)
//print 1
// countDown(0)