
var max=100;
var dp=new Array();

function test(n){

    let dp=new Array();
    if(n<0) return 0;
    if(n==0) return 1;
    if(dp[n]!=-1){
        return dp[n];
    }

    return test(n-1)+test(n-3)+test(n-5);
}


// code driver 

let result=test(11);
console.log(result);