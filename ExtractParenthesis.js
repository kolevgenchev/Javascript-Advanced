function extract(content) {
let el=document.getElementById(content)
let str=el.textContent
let pattern=/\(([^)]+)\)/g
let arr=str.matchAll(pattern)
let final=[]
for(el of arr){
    final.push(el[1])
}

let finalRes=final.join('; ')
console.log(finalRes)

}