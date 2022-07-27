class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

var a=new Node(5);
var b=new Node(3);
var c=new Node(67);
var d=new Node(90);

a.next=b;
b.next=c;
c.next=d;




function linkedValues(head){
    const values=[];
    fillValues(head,values);
    return values;
}

const fillValues=(head,values)=>{
    if(head==null) return;
    values.push(head.data);
    fillValues(head.next,values);
}
var result=linkedValues(a);
for(var t=0;t<result.length;t++){
    console.log(result[t]);
}

