var count=[6,5,7,3,9,10];
var jsonf=JSON.stringify(count);
console.log(jsonf);
var deep_copy=JSON.parse(jsonf);
console.log(deep_copy);