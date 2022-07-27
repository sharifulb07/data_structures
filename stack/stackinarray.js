class twostacks{
    constructor(n){
        this.arr=new Array(n);
        this.size=n;
        this.top1=Math.floor(n/2)+1;
        this.top2=Math.floor(n/2);
    }

    push1(x){
        if(this.top1>0){
            this.top1--;
            this.arr[this.top1]=x;

        }else{
            console.log("Stack Overflow is by Element "+ x+" ");
            return;
        }
    }
    push2(x){
        if(this.top2>=this.size/2){
            this.top2--;
            this.arr[this.top2]=x;
        }else{
            console.log("Stack overflow is here"+x+" ");
            return;
        }
    }

    pop(){
        if(this.top1<=this.size/2){
            var x=this.arr[this.top1];
            this.top1++;
            return x;
            
        }else{
            console.log("Stack underflow");

        }
        return 0;
    }

    pop1(){
        if(this.top2>=Math.floor(this.size/2)+1){
            var y=this.arr[this.top2];
            this.top2--;
            return y;
        }else{
            console.log("stack underflow ");

        }
        return 1;
    }

}

var ts=new twostacks(6);
ts.push1(2);
ts.push1(6);
ts.push2(11);
ts.push2(12);

console.log(ts.pop2());
