// graph data structure 

// graph=nodes+vertices

// const depthFirst=(graph, source)=>{
//     const stack=[source];

//     while(stack.length>0){
//         const current=stack.pop();
//         console.log(current)

//         for(let neighbour of graph[current]){
//             stack.push(neighbour);
//         }
//     }
// }



const depthFirst=(graph,source)=>{
    console.log(source);

    for(let neighbour of graph[source]){
        depthFirst(graph,neighbour);
    }
}

// Driver Code 

const graph={
    a:['b','c'],
    b:['d'],
    d:['f'],
    c:['e'],
    e:[],
    f:[],
}


depthFirst(graph,'a');
