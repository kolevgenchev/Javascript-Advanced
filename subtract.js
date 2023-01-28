function subtract() {
    let firstEl=document.getElementById('firstNumber')
    let secondEl=document.getElementById('secondNumber')
    let num1=Number(firstEl.value)
    let num2=Number(secondEl.value)
    let sum =num1-num2
    let elementsToModify=document.getElementById('result')
    elementsToModify.textContent=sum
}