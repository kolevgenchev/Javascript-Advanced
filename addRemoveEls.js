function addRemove (arr){
let finalArr=[]
let num=0
for(let i=0;i<arr.length;i++){
    let comand=arr[i]
    num++
    if(comand==='add'){
        
        finalArr.push(num)
    }else{
        finalArr.pop()
    }
}
if(finalArr.length===0){
    console.log('Empty')
}else{
    console.log(finalArr.join('\n'))
}

}addRemove(['add', 'add', 'remove', 'add', 'remove'
]
)