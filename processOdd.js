function processOdd(arr){
let odd=[]
for(let i=0;i<arr.length;i++){
    if(i%2!==0){
        odd.push(arr[i])
    }
}
let final=odd.reverse().map(x=>x*2)
return final.join(" ")


}processOdd([10, 15, 20, 25])