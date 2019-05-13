// function Father(){
//     console.log("---Father")
// 	this.property = true;
// }
// Father.prototype.getFatherValue = function(){
//     console.log("---Father.prototype.getFatherValue")
//     return this.property;
// }
// function Son(){
//     console.log("---son")
// 	this.sonProperty = false;
// }
// //继承 Father
// Son.prototype = new Father();//Son.prototype被重写,导致Son.prototype.constructor也一同被重写
// // Son.prototype.getSonVaule = function(){
// // 	return this.sonProperty;
// // }
// console.log("-------")
// var instance = new Son();
// console.log(instance.getFatherValue());//true


var id = 'Global';

function fun1() {
    // setTimeout中使用普通函数
    setTimeout(function(){
        console.log(this)
        console.log("fun1-"+this.id);
    }, 2000);
}

function fun2() {
    // setTimeout中使用箭头函数
    setTimeout(() => {
        console.log(this)
        console.log("fun2-"+this.id);
    }, 2000)
}

fun1.call({id: 'Obj'});     // 'Global'

fun2.call({id: 'Obj'});     // 'Obj'