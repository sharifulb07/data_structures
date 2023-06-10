// connected components count 

function connectedComCount(graph){
    const visited=new Set();
    let count=0;

    for(let node in graph){
      if(explore(graph,node, visited)===true){
        count++;
      };
    }
    return count;
}

function explore(graph, current,visited){
    if(visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbour of graph[current]){
        explore(graph,neighbour,visited);
    }

    return true
}

const result=connectedComCount({
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
})

console.log(result);


let arr=[2,3,4,5,6];

for(let index of arr){
    console.log(index);
}