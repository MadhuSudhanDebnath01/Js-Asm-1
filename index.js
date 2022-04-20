console.log("working");


//Question - 1

let a  = new Set();
function removeDuplicate(str,n){
    for(let m=0;m<str.length;m++){
         a.add(str[m]);
    }
    let str1 = " ";
    for(let val of a.values()){
          str1+= val;
    }
    console.log(str1);
}
removeDuplicate("kkggffuuvvabc")


//Question - 2

let str = "abvadrrcfb";
let r = str.split("");
let newMap = new Map();

for (let i = 0; i < r.length; i++) {
    let count = 1;
    for (let d = i + 1; d < r.length; d++) {
        if (r[i] === r[d]) {
            count++;
            r.splice(d, 1);
            d--;
        }
    }
    newMap.set(r[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}
