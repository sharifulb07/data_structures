var head=[];
var min=[];
function push(x){


    if(isEmpty(head)==true){
        head.push(x);
        min.push(x);
    }else{
        head.push(x);
        var y=min.pop();
        min.push(y)
    }
    if(x<=y){
        min.push(x);
    }

    
}

function isEmpty(arr){
    return arr.length==0;
}

push(20);
push(2);
push(30);
push(37);
push(45);
push(50);
console.log(min[min.length-1]);