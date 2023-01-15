function biggerHalf(arr){
let sorted=arr.sort((x,y)=>x-y)

let final=[]
for(let i=Math.floor(sorted.length/2);i<sorted.length;i++){
    let cur=sorted[i]
    final.push(cur)
}
return (final);
}biggerHalf([4, 7, 2, 5])