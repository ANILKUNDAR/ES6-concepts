let sym1=Symbol('batman')
console.log(sym1.toString())
let sym2=Symbol('batman')
console.log(sym1==sym2)
let onb={
    name:'bruce',
    power:'detective',
    [sym1]:2345
}
console.log(onb)