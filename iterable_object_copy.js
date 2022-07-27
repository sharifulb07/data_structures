
// Array from string here
// var myName=Array.from("My Name is shariful islam");
// console.log(myName);


// Array from number
// var count=Array.from([1,2,3,5,8,9],x=>x*4);
// console.log(count);


// Array from set
// same iterable element must be merged into  an element

// var set=new Set(["boo","bar","baz","boo"]);
// var finalArray=Array.from(set);
// console.log(finalArray);

//Array from map
// var map=new Map([[1,2],[2,4],[4,8]]);
//
// var finalMap=Array.from(map);
// console.log(finalMap);

// console.log(typeof(finalMap));


// var mapper=new Map([['a',1],['b',3],['c',5],['7',8]]);
// var fmapper=Array.from(mapper.keys());
// var vmapper=Array.from(mapper.values());
// console.log(fmapper);
// console.log(vmapper);

// console.log(fmapper.keys);
// console.log(fmapper.values);

// function test(){
//     return Array.from(arguments);
// }

// console.log(test(1,8,5,6,9,23,12));

// making array with specific length below

// var count=Array.from({length:10},(v,i)=>i);
// console.log(count);

// const range=(start,stop,step)=>Array.from({length:(stop-start)/step+1},(_,i)=>start+(i*step));

// var count=range(1,10,1);
// console.log(count);
// var count=range(1,10,3);
// console.log(count);
// var count=range(1,10,2);
// console.log(count);


// var alphabet=range('A'.charCodeAt(0), 'Z'.charCodeAt(0),1).map(x=>String.fromCharCode(x));

// console.log(alphabet);





// const range=(start,stop,step)=>Array.from({length:(stop-start)/step+1},(_,i)=>start+(i*step));
// console.log(range(4,50,5));


Array.isArray([]);