function pieceOfPie(arr,first,last){
let final=[]
let indexOfFirst=arr.indexOf(first)
let indexOfLast=arr.indexOf(last)

for(let i=indexOfFirst;i<=indexOfLast;i++){
    let cur=arr[i]
    final.push(cur)
}
return (final)
}pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')