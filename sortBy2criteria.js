function sortBy2 (arr){
let result=arr.sort((a,b)=>a.length-b.length||a.localeCompare(b))
console.log(result.join("\n"))

}sortBy2(['alpha', 
'beta', 
'gamma'])