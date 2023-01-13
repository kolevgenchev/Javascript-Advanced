function previousDay(year,month,day){
const date=new Date(year,month-1,day-1)
const newYear=date.getFullYear()
const monthh=date.getMonth() +1
const dayy=date.getDate()
console.log(`${newYear}-${monthh}-${dayy}`)

}previousDay(2016, 9, 30)