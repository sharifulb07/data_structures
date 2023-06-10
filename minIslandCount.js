// declare minIslandCount func

const minIslandCount=(grid)=>{
    const visited=new Set();

    let minSize=Infinity;

    for(let r=0;r<grid.length;r+=1){
        for(let c=0;c<grid[0].length;c+=1){
            const size=explore(grid,r,c,visited);
            if(size>0 && size<minSize){
                minSize=size;
            }
        }
    }

    return minSize;
}

// declare explore func

const explore=(grid,r,c,visited)=>{


    // bounds checking
    const rowInBounds= 0<=r && r <grid.length;
    const colInBounds= 0<=c && c <grid[0].length;

    if(!rowInBounds || !colInBounds) return 0;


    // water checking 
    if(grid[r][c]==='w') return 0;

    // visit checking
    const pos=r+','+c;
    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size=1;
    size+=explore(grid,r-1,c,visited);
    size+=explore(grid,r+1,c,visited);
    size+=explore(grid,r,c-1,visited);
    size+=explore(grid,r,c+1,visited);

return size;

}


// code driver

const grid=[
    ['w','l','w','w','w'],
    ['w','w','l','l','l'],
    ['w','w','w','l','w'],
    ['w','w','w','w','w'],
    ['l','w','l','l','w'],
    ['l','w','l','l','w'],
];


const result=minIslandCount(grid);
console.log(result);