// method two

const hasPath=(graph, src, dist)=>{

    const queue=[src];
    while(queue.length>0){
        const current=queue.shift();
        if(current===dist) return true;

        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }

    return false
}




// method one

// const hasPath=(graph,src,dist)=>{

//     if(src===dist) return true;

//     for(let neighbour of graph[src]){

//         if(hasPath(graph,neighbour,dist)===true){
//             return true;
//         }
//     }

//     return false;
// }




const graph={
    a:['b','c'],
    b:['d'],
    d:['f'],
    c:['e'],
    e:[],
    f:[],
}


const result=hasPath(graph,'a','f');
console.log(result);