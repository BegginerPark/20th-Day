// var a = Math.ceil(Math.random() * 10);
// var b = Math.ceil(Math.random() * 10);
// var solution = a * b;
// var ans;
// ans = parseInt(prompt(a + "*" + b + "=?"));
// if(ans == solution){
//     console.log("맞았습니다.");    
// }
// else{
//     console.log("틀렸습니다.");
// }

ans = 0;
do {
    var a = Math.ceil(Math.random() * 10);
    var b = Math.ceil(Math.random() * 10);
    var solution = a * b;
    var ans;
    ans = parseInt(prompt(a + "*" + b + "=?"));
} while(ans != solution);
console.log("맞혔습니다.");