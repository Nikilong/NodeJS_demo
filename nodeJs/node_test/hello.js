'use strict';
var s = "hello";

function sayHello(name) {
    console.log(s + "," + name);
}

function sayBye() {
    console.log("bye~~")
}

// 只输出一个函数
// module.exports = sayHello;

// 输出多个函数
// 写法1
// module.exports = {
//     sayHello:sayHello,
//     sayBye:sayBye
// };
// 写法二
exports.sayHello = sayHello;
exports.sayBye = sayBye;