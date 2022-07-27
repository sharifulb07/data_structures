// linkedlist with iterative version
// Node declaration

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


//initialization of Node 
var a=new Node(21);
var b=new Node(5);
var c=new Node(6);
var d=new Node(14);

// set up a link among Nodes
a.next=b;
b.next=c;
c.next=d;

//insert function declaration
function push(new_data,head){
    new_node=new Node(new_data);
    new_node.next=head;
    head=new_node;
}

push(96,a);
// test function with es6 pattern
// const test=(head)=>{
//     var current=head;
//     while(current!=null){
//         console.log(current.data);
//         current=current.next;
//     }
// }

//calling test function
// test(a);

// function calling recursively
// function recursiveTest(head){
//     if(head==null) return;
//     console.log(head.data);
//     recursiveTest(head.next);

// }

//calling recursively

// recursiveTest(a);

function linkedlist(head){
    var values=[];
    var current=head;
    while(current!=null){
        values.push(current.data);
        current=current.next;
    }
    return values;
}


console.log(linkedlist(a));
// var result=linkedlist(b);
// console.log(result);

// for (var cool=0; cool<result.length;cool++){

//     console.log(result[cool]);
// }

