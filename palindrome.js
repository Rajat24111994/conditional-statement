let bag="";
let str= "12344321";
for (let i=str.length-1; i>=0; i--){
 bag+=str[i];
} if (bag==str){
console.log("Yes")
} else{
console.log("No");
}