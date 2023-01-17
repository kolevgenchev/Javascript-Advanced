function subset (arr){
    let biggest=arr[0]
let final=arr.reduce((acc,cur)=>{
    if(cur>=biggest){
        biggest=cur
        acc.push(biggest)
    }
    return acc
},[])
return final
}subset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])