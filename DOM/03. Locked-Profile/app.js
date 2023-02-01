function lockedProfile() {
   let profilesElements=document.getElementsByClassName ('profile')
   profilesElements=Array.from(profilesElements)
   for(el of profilesElements){
    let curButtonEl= el.getElementsByTagName('button')[0]
    curButtonEl.disabled='true'
    let lockElements=el.querySelector('input[type="radio"][value="lock"]')
    let unlockElements=el.querySelector('input[type="radio"][value="unlock"]')
    let hiddenElement=el.querySelectorAll("[id^='user']")
    console.log(hiddenElement)
    unlockElements.addEventListener('click',()=>{
        curButtonEl.removeAttribute('disabled')
    })
    lockElements.addEventListener('click',()=>{
        curButtonEl.disabled='true'
    })

    curButtonEl.addEventListener('click',()=>{
        if(hiddenElement[0].style.display==='inline'){
            hiddenElement[0].style.display='none'
            curButtonEl.textContent='Show more'
        }else{
            hiddenElement[0].style.display='inline'
        curButtonEl.textContent='Hide it'
        }

        
    })
   
   }
}

 
 
 