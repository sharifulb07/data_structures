// create a priority queue and several function now

class PriorityQueue{

    constructor(){
        this.queue=[];
    }

    enqueue(element, priority){
        const item={element, priority};

        if(this.isEmpty()){
            this.queue.push(item)
        }else{
            let added=false;

            for(let i=0;i<this.queue.length;i++){

                if(item.priority<this.queue[0].priority){
                    this.queue.splice(i,0,item);
                    added=true;
                    break;
                }
            }

            if(!added){
                this.queue.push(item);

            }
        }
    }


    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty ')
        }else{
            return this.queue.shift().element;
        }
    }

    front(){
        if(this.isEmpty()){
            console.log('Queue is empty')
        }else{
            return this.queue[0].element;
        }
    }


    isEmpty(){
        return this.queue.length===0;
    }


    last(){
        if(this.isEmpty()){
            console.log('Queue is empty ');
        }
    return this.queue[this.queue.length-1];
    }


Print(){
    return this.queue;
}

}


const pq=new PriorityQueue();

pq.enqueue('Task one', 2);
pq.enqueue('Task two', 3);
pq.enqueue('Task three', 4);
pq.enqueue('Task four ', 5);
pq.enqueue('Task five', 6);

// console.log(pq.dequeue());

console.log(pq.Print());