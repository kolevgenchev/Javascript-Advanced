function rotate (arr,rotations){
let result=[]
for(let i=0;i<rotations;i++){
arr.unshift(arr.pop())
}
console.log(arr.join(" "))
}rotate(['1', 
'2', 
'3', 
'4'], 
2)