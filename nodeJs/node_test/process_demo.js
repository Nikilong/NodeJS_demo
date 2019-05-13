process.nextTick(function(){
    console.log("process.nextTick")
});

process.on("exit",function(){
    console.log("about to exit")
});

console.log("-------")

if(typeof(window)==="undefined"){
    console.log("Node.js")
}else{
    console.log("browser")
}