class Node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}

var a=new Node(5);
var b=new Node(8);
var c=new Node(100);
var d=new Node(90);

a.next=b;
b.next=c;
c.next=d;


// const sumAll=(head)=>{
//     var sum=0;
//     var current=head;
//     while(current!=null){
//         sum += current.data;
//         current=current.next;
//     }
//     return sum;
// }


// console.log(sumAll(a));


// const sumAll=(head)=>{
//     var sum=1;
//     var current=head;
//     while(current!=null){
//         sum *= current.data;
//         current=current.next;
//     }
//     return sum;
// }


// console.log(sumAll(a));


const sumAll=(head)=>{
    var sum=1;
    var current=head;
    while(current!=null){
        sum *= current.data;
        current=current.next;
    }
    return sum;
}


console.log(sumAll(a));

