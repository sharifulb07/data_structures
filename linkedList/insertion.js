var head;

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

head=new Node(45);
var second=new Node(89);
var third=new Node(8);
var four=new Node(81);
var five=new Node(79);

head.next=second;
second.next=third;
third.next=four;
four.next=five;

function deleteNode(position){

    if(head==null){
        return null;
    }
    var temp=head;

    if(position==0){
        temp=temp.next;
        return;
    }

    for(var i=0; temp!=null && i<position-1;i++)
        temp=temp.next;
    var next=temp.next.next;
    temp.next=next;
    return;
}

// push(475);
// push(494);
// // push(5);

// // endPush(123);
// // endPush(999);
// // endPush(999);
// // endPush(999);
// deletion(475);
// deletion(89);
// var n=head;

// afterPush(third,8000);


// while(n!=null){
//     console.log(n.data+"  ");
//     n=n.next;

// }

// // data push at the end side of the linkedList here okay 
// function endPush(new_data){
//     var new_node=new Node(new_data);

//     if(head==null){
//         head=new Node(new_data);
//         return;
//     }

//     var last=head;
//     while(last.next!=null)
//         last=last.next;
//     last.next=new_node;

//     return;
// }

// // data push after a certain node and
// function afterPush(prev_node,new_data){
//     if(prev_node==null){
//         console.log("The node cannot be empty ");
//         return null;
//     }

//     var new_node=new Node(new_data);
//     new_node.next=prev_node.next;
//     prev_node.next=new_node;
// }


// //data push at the front side
// function push(new_data){
//     var new_node=new Node(new_data);
//     new_node.next=head;
//     head=new_node;
// }



// // data deletion from linked list here

// function deletion(key){
//     var temp=head;
//     var prev=null;

//     if(temp!=null && temp.data==key){
//         temp=temp.next;
//         return;
//     }

//    while(temp!=null && temp.data!=key){
//         prev=temp;
//         temp=temp.next;
//     }
//     prev.next=temp.next;
// }