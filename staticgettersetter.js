/*

class Uber{
    static sayHi(){
        console.log('I am a static function')
    }
}
Uber.sayHi()
*/

class Driver{
    constructor(name){
        this._name=name
    }
    get myname(){
        return this._name
    }
    set myname(val){
        this._name=val
    }
}
let drive=new Driver('john')
console.log(drive.myname)
drive.myname="jonny"
console.log(drive.myname)