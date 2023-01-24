function sumTable() {
let elements=document.getElementsByTagName('tr')
let arr=Array.from(elements)
let sum=0
for(let i=1;i<arr.length-1;i++){
   let cur = arr[i].getElementsByTagName('td')[1].textContent
   sum+=Number(cur)
}
let el=document.getElementById('sum')
el.textContent=sum
}