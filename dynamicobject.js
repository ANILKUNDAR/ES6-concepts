let score=900
let wrath="angry"
let myObj={
    user:'john',
    score:200,
    angry:99,
    highScore(){
        console.log("your score is" +this.score)
    }
}
console.log(myObj.score)
console.log(myObj.highScore())
console.log(myObj[wrath])