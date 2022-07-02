// //Array and its function 

// let fruits=["Apple","Banana"];
// console.log(fruits.length);
// console.log(fruits[0]);

// //array constructor

// let num=new Array(10);
// console.log(num.length);

// let names=['adiyat','shariful','ruhul amin','koolsom','noyon alom'];
// console.log(names);

// Array.from for shallow copies here

// let vowels=Array.from("Education is the backbone of nation");
// console.log(vowels);
// console.log(vowels.map(i=>i));
// Array from Set

// const set=new Set(['foo','bar','karima','aklima','karima']);
// console.log(set.length);
// const names=Array.from(set);
// console.log(names.map(i=>i+"<br>"));
// console.log(names.length);


// array from a map
// 
// const map=new Map([['a','1'],['b','2'],['c','3']]);
// const keyMap=Array.from(map.keys);
// console.log(keyMap);
// const valuesMap=Array.from(map.values);
// console.log(valuesMap);
// const myMap=Array.from(map);
// console.log(myMap);
// const mapp=Array.from(map.keys());
// console.log(mapp);
// const mappe=Array.from(map.values());
// console.log(mappe);

//sorting insecure img sources link here


// const images=document.getElementsByTagName('img');
// const sources=Array.from(images,image=>image.src);
// const insecuresources=sources.filter(link=>link.startsWith('http//'));
// console.log(insecuresources);

// Array from is used here from arguments with specific array size

// function test(){
//     return Array.from(arguments);
// }

// var output=test(1,2,3,5,6,8);
// console.log(output);

// Array from arrow function here

// const output=Array.from([5,3,6,9,8,7,1],i=>i);
// console.log(output.sort());


// Sequence generator (range)

// const output=Array.from({length:15},(_,i)=>i+1);
// console.log(output);



// const range=(start,stop,step)=>Array.from({length:(stop-start)/step+1},(_,i)=>start+(i*step));
// const output=range(3,90,5);
// console.log(output);

// const result=range('e'.charCodeAt(0),'p'.charCodeAt(0),2).map(x=>String.fromCharCode(x));
// console.log(result);

// array check

// var output=Array.isArray([]);
// var output=Array.isArray({foo:4321});
// console.log(output);

// var output=Array.isArray('footbal');

// console.log(output);
// var output=Array.isArray(undefined);

// console.log(output);

// var output=Array.isArray(new Array());

// console.log(output);

// var output=Array.isArray(new Array('a','b','c','d','e','f'));
// console.log(output);

// var output=Array.isArray(new Array(1,5,2,6,9,7,25));
// console.log(output);

// var output=Array.isArray(Array.prototype);
// console.log(output);

// var output=Array.isArray(null);
// console.log(output);

// var output=Array.isArray(true);
// console.log(output);


// Array.of methods are here 

// const arr=Array.of(8,9,8,5,6);
// console.log(arr.length);



// const arr=[5,4,3,6,8,7];
// let index=-7;

// console.log(arr.at((index)));


// concatening array like objects 

// const obj1={0:1,1:2,2:3,3:4,4:5,length:7};
// const obj2={0:1,1:2,2:3,3:4,4:5,length:7,[Symbol.isConcatSpreadable]:true};
// const output=[0].concat(obj1,obj2);
// console.log(output);


// const cool=[1,2,5,6]
// const tool=[1,3,4,7];
// const output=cool.concat(tool);
// output.sort();
// console.log(output)


// const myArray=[1,2,3,4,5,6,7,8];
// myArray.copyWithin(0,3,-1);
// console.log(myArray);


//[].copyWithin(target,start,end);

// var myArray=[1,2,3,4,5,6,7,8,9].copyWithin(2,5,7);
// var myArray=[1,2,3,4,5,6,7,8,9].copyWithin(0,3);
// var myArray=[1,2,3,4,5,6,7,8,9].copyWithin(0,-3,-1);
// var myArray=[1,2,3,4,5,6,7,8,9].copyWithin(0,-3,-1);

// var myArray=[].copyWithin.call({length:5,3:1},0,3);
// console.log(myArray.length)

// const copy=new Int32Array([1,2,3,4,5,6,7,8]);
// const result=copy.copyWithin(0,2);
// console.log(result);
// console.log(myArray);


//array entries method
// var myArray=['a','b','c','d'].entries();
// var finalArr=myArray.entries();
// console.log(finalArr.next().value);
// console.log(finalArr.next().value);
// console.log(finalArr.next().value);
// console.log(finalArr.next().value);

// for(const [index,element] of myArray){
//     console.log(index,element);

// }

// for(const a of myArray){
//     console.log(a);
// }



// array every method
// const isBelowThreshold=(currentValue)=>currentValue<=40;
// // var result=[1,10,20,30,40].every(isBelowThreshold);
// var result=[1,10,20,30,50].every(isBelowThreshold);
// console.log(result);


// function isBigEnough(element,index, array){
//     return element>10;
// }
// // var arr=[20,15,12,13,14];
// var arr=[20,15,12,13,8];
// var result=arr.every(isBigEnough);
// console.log(result);


// console.log(isSubset(arr,arr1));

// const test=()=>{
//     var arr=[5,3,6,8,9,10];
//     var arr1=[5,6,9];
//     const isSubset=(arr1,arr2)=>arr2.every(element=>arr1.includes(element));
//     var result=isSubset(arr,arr1);
//     if(result){
//     console.log("subset is here");
//     }
//     else{
//     console.log("is not subset");
//     }

// }

// let arr=[1,2,3,4];
// arr.every((elem,index,arr) => {
//     arr[index+1]-=1;
//     console.log(`[${arr}][${index}]->${elem}`)
//     return elem<2;
// });
// console.log(arr);


// insert every element using push

// const arr = [5, 3, 6, 8, 6];
// arr.every((elem, index, arr) => {
//     arr.push('new');
//     console.log(`[${arr}][${index}]->${elem}`);
//     return elem < 9;

// });
// console.log(arr);


// const arr = [5, 3, 6, 8, 6];
// arr.every((elem, index, arr) => {
//     arr.pop();
//     console.log(`[${arr}][${index}]->${elem}`);
//     return elem < 10;

// });
// console.log(arr);



// var arr=[1,2,3,4,5];
// // var result=arr.fill(9,1,4);
// var result=arr.fill(9,1);
// var result=arr.fill(9);
// console.log(result);

// var arr=['shariful','hasan','ali','mohsinhossain','cool','doubling'];
// var result=arr.filter(elem=>elem.length>5);
// console.log(result);


// const array=[-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// function isPrime(num){
//     for(let i=2;num>i;i++){
//         if(num%i==0){
//             return false;
//         }

//     }
//     return num>1;
// }
// var result=array.filter(isPrime);
// console.log(result);


// checking invalid entries by arr.filter method

// const arr=[{id:2},{id:3},{id:4},{id:5},{id:null},{id:undefined},{id:NaN},{id:0}];
// let invalidEntries=0;

// function filterByID(item){
//     if(Number.isFinite(item.id)&& (item.id !==0)){
//         return true;
//     }
//     invalidEntries++;
//     return false;
// }
// var result=arr.filter(filterByID);
// console.log(result);


// const fruits=["apple","banana","grapes","mango","orange"];
// function filterItems(arr,query){
//     return arr.filter(function (el){
//         return el.toLowerCase().indexOf(query.toLowerCase())!==-1;
//     })
// };

// var result=filterItems(fruits,'ap');
// console.log(result);

// var result=filterItems(fruits,'an');
// console.log(result);