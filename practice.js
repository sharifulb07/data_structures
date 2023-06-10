// 48

// finding a shortest path between two nodes in a graph

// shortest path function here 
const shortestPath=(edges,nodeA,nodeB)=>{

const graph=buiildGraph(edges);
const visited=new Set([nodeA]);

const queue=[[nodeA,0]];

while(queue.length>0){

    const [node, distance]=queue.shift();
    if(node===nodeB) return distance;

    for(let neighbour of graph[node]){
        if(!visited.has(neighbour)){
            visited.add(neighbour);
            queue.push([neighbour,distance+1]);
        }
    }
}

return -1;


}


// graph builder function her e 
const buiildGraph=(edges)=>{
    const graph={};

    for(let edge of edges){
        const [a,b]=edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;

}

// code driver 
const edges=[
    ['a','b'],
    ['b','c'],
    ['c','d'],
    ['d','e'],
]

const result =shortestPath(edges,'a','c');
console.log(result);