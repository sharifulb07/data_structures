class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

var head=new Node(12);
var b=new Node(16);
var c=new Node(17);
var d=new Node(19);
var e=new Node(100);


head.next=b;
b.next=c;
c.next=d;
d.next=e;


var one=new Node('a');
var two=new Node('b');
var three=new Node('c');
var four=new Node('d');

one.next=two;
two.next=three;
three.next=four;

// function push(new_data){
//     var new_node=new Node(new_data);
//     new_node.next=head;
//     head.next=new_node;
// }




