class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

var a=new Node(12);
var b=new Node(16);
var c=new Node(17);
var d=new Node(19);
var e=new Node(100);


a.next=b;
b.next=c;
c.next=d;
d.next=e;

// // this is iterative way 

// function dirChange(head){

//     var pre=null;
//     var current=head;
//     while(current!=null){
//         var next=current.next;
//         current.next=pre;
//         pre=current;
//         current=next;
//     }
//     return pre.data;
// }

// var result=dirChange(a);
// console.log(result);


//recursive way here 

// function dir(head, pre=null){
//     if(head==null) return pre.data;
//     var next=head.next;
//     head.next=pre;
//     return dir(next,head);

// }

// var result=dir(a,null);
// console.log(result);
