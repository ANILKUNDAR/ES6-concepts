function deposite(...money){
    console.log(money)
    let balance=0
    for(let i=0;i<money.length;i++){
        balance+=money[i]
    }
    return balance;
}

console.log(deposite(100,40,50,30))

let addMoney=[34,66,44,96,64]
console.log(...addMoney)
console.log(Math.max(...addMoney))