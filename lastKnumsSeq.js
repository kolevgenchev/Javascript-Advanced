function lastKnums(n,k){
    let arr=[]
for(let i=0;i<n;i++){
if(i===0){
    arr.push(1)
}else{
    let sum=0
    let lastK=arr.slice(-k)
    for(el of lastK){
        sum+=el
    }
    arr.push(sum)
}

}
return arr;

}lastKnums(6,3)