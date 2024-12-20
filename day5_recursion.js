//Recursion example
/*
function printHello(n) {

    //base condition: exit criterion
    
    console.log(`for ${n}: printing Hello`);
    if(n==1){
        console.log("Finally start coming out of recursion");
        return;
    }
    printHello(--n);

}

printHello(5);
*/
/*
function findFactorial(num){
    let factorial = 1;
    for(let i = num; i>0 ;i--){
        factorial = factorial * i;
    }
    return factorial;
}

const res = findFactorial(5);
console.log(res);

*/

//Using Recursion

function findFactorialUsingRecursion(num){
    
    if(num === 0){
        return 1
    }
    return num * findFactorialUsingRecursion(--num);
}

const res = findFactorialUsingRecursion(5);
console.log(res);