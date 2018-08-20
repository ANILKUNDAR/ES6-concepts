let person1={
    name:'john',
    power:'100 '
}
let person2={
    name:'kim',
    power:'80 '
}
let person3=new Map()
person3.set('joe',person1)
person3.set('horitz',person2)
console.log(person3)
for (key of person3.keys()){
 console.log(key)
}
for (key of person3.entries()){
    console.log(key)
   }

