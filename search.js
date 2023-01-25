function search() {
   let inputEl=document.getElementById('searchText')
   inputEl=inputEl.value
   console.log(typeof inputEl)
   let towns=document.getElementsByTagName('li')
   let arr=Array.from(towns)
   let counter=0
   for(el of arr){
      let cur=el.textContent
      if((cur.includes(inputEl)||cur.toLowerCase().includes(inputEl.toLowerCase()))&&inputEl!==''){
         counter++
         el.style.fontWeight='bold'
         el.style.textDecoration='underline'
      }else{
         el.style.fontWeight='normal'
         el.style.textDecoration='none'

      }
   }
   let result=document.getElementById('result')
   result.textContent=`${counter} matches found`

}
