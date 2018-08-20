/*
1)

//declare first and then  use
var getdata=(temp,cold=10)=>{
    console.log(temp)
    console.log(cold)
    if(temp<cold){
        return "This is very cold"
    } else{
        return "This is not so cold"
    }
}
//console.log(getdata());//this is not not so cold
//console.log(getdata(4))//this is very cold
console.log(getdata(12,15))// cold will set to 15
*/
/*
2)
var getdata=(temp=12,cold)=>{
    console.log(temp)//20
    console.log(cold)//undefined
    if(temp<cold){
        return "This is very cold"
    } else{
        return "This is not so cold"
    }
}
console.log(getdata(20))

*/
