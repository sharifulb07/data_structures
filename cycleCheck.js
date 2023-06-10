let V;
let adj=[];

function Graph(v){
    V=v;
    for(let i=0;i<V;i++){
        adj.push([]);

    }
}

function isCyclicUtil(i, visited, recStack){
    if(recStack[i]) return true;
    if(visited[i]) return false;

    visited[i]=true;
    recStack[i]=true;

    let children=adj[i];
    for(let c=0;c<children.length;c++)
        if(isCyclicUtil(children,visited,recStack))
            return true;
        
    recStack[i]=false;
    
    return false;
}

function adEdge(src,dist){
    adj.push(dist);
}


function isCyclic(){

    let visited=new Array(V);
    let recStack=new Array(V);

    for(let i=0;i<V;i++){
        visited[i]=false;
        recStack[i]=false
    }

    for(let j=0;j<V;j++)
        if(isCyclicUtil(j,visited,recStack))
            return true;
    return false;
    
}


Graph(4);
adEdge(0,1);
adEdge(0,2);
adEdge(1,2);
adEdge(2,0);
adEdge(2,3);
adEdge(3,3);


if(isCyclic()){
    console.log("Graph contains cycle");
}else{
    console.log("Graph doesn't"+"contain cycle");
}
