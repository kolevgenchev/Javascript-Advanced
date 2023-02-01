function addItem() {
    let newItemTextElement=document.getElementById('newItemText')
    let newItemValueElement=document.getElementById('newItemValue')
    let selectElement=document.getElementById('menu')
    let newElement=document.createElement('option')
    newElement.setAttribute('value',newItemValueElement.value)
    newElement.textContent=newItemTextElement.value
    selectElement.appendChild(newElement)
    newItemTextElement.value = "";
    newItemValueElement.value = "";
}
// function addItem() {
//     let newItemTextElement = document.getElementById("newItemText");
//     let newItemValueElement = document.getElementById("newItemValue");
//     let selectElement = document.getElementById("menu");
//     let newOption = document.createElement("option");
//     newOption.textContent = newItemTextElement.value;
//     newOption.value = newItemValueElement.value;
//     selectElement.appendChild(newOption);
//     newItemTextElement.value = "";
//     newItemValueElement.value = "";
//   }