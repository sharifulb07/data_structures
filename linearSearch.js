function linearSearch(arr, x){
    let left=0;
    let length=arr.length;
    let right=arr.length-1;
    let position=-1;

    for(left=0;left<=right;){
        if(arr[left]==x){
            position=left;
            console.log(position);
            break;
        }

        if(arr[right]==x){
            position=right;
            console.log(position);
            break;
        }
        left++;
        right--;
    }
}
//code driver
var tool=[4,6,2,21,3,13,6,8,9,71,24,5];
var x=9;

// calling function
linearSearch(tool,x);