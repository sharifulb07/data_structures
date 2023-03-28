let room={
    number:23
};

let meetup={
    title:"Conference",
    occupiedBy:[{name:"John"}, {name:"Allice"}],
    place:room,
};

room.occupiedBy=meetup;
meetup.self=meetup;

console.log(JSON.stringify(meetup,function replacer(key,value){
    return (key!==" " && value==meetup)? undefined:value;
}));










// let user={
//     name:"shariful islam",
//     age:35,
// }
// let result=JSON.stringify(user);
// console.log(result);





// let str='{"title":"Conference", "date":"2017-11-30T12:00:00:000Z"}';
// let meetup=JSON.parse(str,function(key,value){
//     if(key=='date') return new Date(value);
//     return value;
// });


// console.log(meetup.date.getDate());




// let user={
//     name:'shariful islam',
//     age:34,
//     toString(){
//         return `{name"${this.name}" is ${this.age} years old now}`
//     }
// }

// console.log(user.toString());


// let user={
//     name:"shariful islam",
//     age:34,
//     isAdmin:true,
//     courses:['css','html','js'],
//     spouse:null,
// };

// let finalResult=JSON.stringify(user);
// alert(finalResult);





// // basketball function here below described 

// const CallBasketballResult=(ops)=>{
//     let result=[];

//     for(const op of ops){
//         const si=result.length-1;
//         let newScore=0;

//         switch(op){
//             case '+':
//                 newScore=result[si]+result[si-1];
//                 result=[...result,newScore];
//                 break;
//             case 'D':
//                 newScore=result[si]*2;
//                 result=[...result,newScore];
//                 break;
//             case 'C':
                
//                     result.pop();
//                     break;
                
//             default:
//                 newScore=+op;
//                 result=[...result,newScore];
//                 break;
//         }
//     }

//     result=result.reduce((a,b)=>a+b,0);
//     return result;


// }



// const arr=['1','C','90','D'];


// let total=CallBasketballResult(arr);
// console.log(total);