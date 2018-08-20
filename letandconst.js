/* 
1)if(true){
    var score=80;
}
console.log(score)
 //output:score=80


2)if(true){
    let score=80;
}
console.log(score)
//output :score is not defined

3)
let score=100;
if(true){
    let score=80;
    console.log(score) //output:80
}
console.log(score)//output:100
score=200;
console.log(score)//output:200


4)
const score=100;//constent cannot change
if(true){
    let score=80;
    console.log(score)
}
console.log(score)
5)
const cars=['BMW','CITY'];
const score=100
if(true){
    let score=80;
    console.log(score)
}
console.log(cars)//output:[ 'BMW', 'CITY' ]
cars.push('NANO');//in javascipt the const pointing to arrayor object can be changed
console.log(cars)//output:[ 'BMW', 'CITY', 'NANO' ]
*/