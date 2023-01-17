function listOfNames(arr){
let ascending=arr.sort((a,b)=>a.localeCompare(b)).map((x,i)=>i+1+'.'+x+'').join('\n')
console.log(ascending)
}listOfNames(["John", "Bob", "Christina", "Ema"])