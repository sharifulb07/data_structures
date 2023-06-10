// island counting problem here

const islandCount = (grid) => {
  const visited = new Set();
    let count=0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
     if(explore(grid, r, c, visited)===true){
        count+=1;
     };
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  // bounds checking
  const rowinBounds=0<=r && r<grid.length;
  const colinBounds=0<=c && c<grid.length;
  if(!rowinBounds || !colinBounds) return false;

  const pos=r+','+c;
  // water checking
  if(grid[r][c]==='w') return false;

  // already visit checking
  if(visited.has(pos)) return false;
  visited.add(pos)
  explore(grid,r-1,c,visited);
  explore(grid,r+1,c,visited);
  explore(grid,r,c-1,visited);
  explore(grid,r,c+1,visited);

  return true;
};



const grid=[
    ['w','l','l','w'],
    ['w','l','w','w'],
    ['w','w','w','w'],
    ['w','w','w','l'],
    ['w','l','w','w'],
]

const result=islandCount(grid);
console.log(result);