function create(words) {
   let mainDivElement=document.getElementById('content')

   for(el of words){
     let divEl= document.createElement('div')
      let pEl=document.createElement('p')
      pEl.textContent=el
      pEl.style.display='none'
      divEl.appendChild(pEl)
      mainDivElement.appendChild(divEl)
      divEl.addEventListener('click',()=>{
         pEl.style.display='inline'
      })
   }
  
}