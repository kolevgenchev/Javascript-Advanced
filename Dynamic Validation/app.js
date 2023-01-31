function validate() {
    let inputElement=document.getElementById('email')
    let email=inputElement.textContent
    let regex=/[a-z]+@[a-z]+.[a-z]+/g
    inputElement.addEventListener('change',(e)=>{
        if(!e.currentTarget.value.match(regex)){
            inputElement.classList.add('error')
           e.currentTarget.style="border:2px solid red" 
        }else{
            inputElement.removeAttribute('class')
            e.currentTarget.removeAttribute('style')
        }
       
    })
    
}
// function validate() {
//     let inputElement = document.getElementById("email");
//     let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
//     inputElement.addEventListener("change", (e) => {
//       if (!e.currentTarget.value.match(regex)) {
//         e.currentTarget.style = "border: 2px solid red";
//       } else {
//         e.currentTarget.style = "";
//       }
//     });
//   }