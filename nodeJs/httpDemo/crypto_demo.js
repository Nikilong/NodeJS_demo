'use strict';

const cry = require("crypto");



// MD5和SHA1
// const hash = cry.createHash("md5");
// hash.update("hello world");
// console.log(hash.digest("hex"))

// Hmac 
const hmac = cry.createHmac("sha256","123456"); // 需要传入一个密匙'123456'
hmac.update("hello world");
console.log(hmac.digest("hex"))

