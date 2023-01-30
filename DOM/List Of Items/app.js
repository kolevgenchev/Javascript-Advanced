function addItem() {
    let inputElements=document.getElementById('newItemText')
    let text=inputElements.value
    let lists=document.getElementById('items')
    let newEl=document.createElement('li')
    newEl.textContent=text
    lists.appendChild(newEl)
}