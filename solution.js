function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let input=document.getElementById('searchField')
      let inputt=input.value
      if(inputt!==''){
         let names=document.querySelectorAll('tbody tr')
         let arr=Array.from(names)
         
       for (el of arr) {
         el.classList.remove("select");
         el.style.backgroundColor = "";
       }
         for(let i=0;i<arr.length;i++){
            let cur=arr[i].textContent
            if(cur.includes(inputt)){
               arr[i].className="select"
            }
         }
         input.value=''
         let classes=document.getElementsByClassName('select')
         for(el of classes){
            el.style.backgroundColor = "yellow"
         }
      }
      
      
   
   
}

}