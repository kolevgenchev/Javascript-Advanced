function callorie (arr){
    let obj={}
for(let i=0;i<arr.length;i+=2){
let product=arr[i]
let callories=Number(arr[i+1])
obj[product]=callories
}
console.log(obj)
}callorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])