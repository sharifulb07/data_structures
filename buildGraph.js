
// Build Graph 

const undirectedGraph=(edges,nodeA,nodeB)=>{
    const graph=buildGraph(edges);
    return hasPath(graph,nodeA,nodeB, new Set());
}

const hasPath=(graph,src,dist, visited)=>{
    if(src===dist) return true;
    if(visited.has(src)) return false;

    visited.add(src);


    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dist, visited)===true){
            return true;
        }
    }

    return false;
}

const buildGraph=(edges)=>{
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



// const undirectedGraph=(edges,nodeA,nodeB)=>{
//     const graph=builderGraph(edges);
//     return hasPath(graph,nodeA,nodeB);

// }

// const hasPath=(graph, src,dist, new Set)=>{
//     if(src===dist) return true;

// }

// // graph builder here now


// const builderGraph=(edges)=>{
//     const graph={};

//     for(let edge of edges){
//         const [a,b]=edge;
//         if(!(a in graph)) return graph[a]=[];
//         if(!(b in graph)) return graph[b]=[];
//         graph[a].push(b);
//         graph[b].push(a);
//     }

//     return graph;

// }



const edges=[
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

const graph=undirectedGraph(edges, 'm','k');
console.log(graph);