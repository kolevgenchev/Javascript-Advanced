function calc() {
    let firstNum=document.getElementById('num1')
    let number1=Number(firstNum.value)
    let secondNum=document.getElementById('num2')
    let number2=Number(secondNum.value)
    let result=document.getElementById('sum')
    result.value=number1+number2
}
