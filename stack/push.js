class Queue{
    constructor(){
      this.s1=[];
      this.s2=[];
    }
    
     enQueue=function(x){
      while(this.s1.length!=0){
        this.s2.push(this.s1.pop());
      }
      this.s2.push(x);
      
      while(this.s2.length!=0){
        this.s1.push(this.s2.pop());
      }
    }
     deQueue=function(){
      if(this.s1.length==0){
        console.log("s1 is empty");
      }
      var x=this.s1[this.s1.length-1];
      this.s1.pop();
      return x;
    }
  }
  
  
  var q=new Queue();
  q.enQueue(4);
  q.enQueue(8);
  q.enQueue(10);
  q.enQueue(100);
  q.enQueue(200);
  console.log(q.deQueue());
  console.log(q.deQueue());
  console.log(q.deQueue());
  console.log(q.deQueue());
  console.log(q.deQueue());