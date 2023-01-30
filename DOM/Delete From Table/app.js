function deleteByEmail() {
    let inputedEmail=document.querySelector('label input')
    let mailStr=inputedEmail.value
    let allMailsElement=document.querySelectorAll('tbody tr')
    let resultElement=document.getElementById('result')
    
    for(el of allMailsElement){
        if((el.textContent).includes(mailStr)){
            el.remove()
            resultElement.textContent='Deleted.'
        }
    }
    if(!resultElement.textContent){
        resultElement.textContent='Not found.'
    }
    
}