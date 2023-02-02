function encodeAndDecodeMessages() {
    let textInputElement=document.querySelector('textarea[placeholder="Write your message here..."]')
    let secondTextAreaElement=document.querySelector('textarea[placeholder="No messages..."]')
    let initialRes=''
    console.log(secondTextAreaElement)
    let buttons = document.querySelectorAll('button');
let encodeAndSendbutton;
for (const btn of buttons) {
    if (btn.textContent === "Encode and send it") {
        encodeAndSendbutton = btn;
        break;
    }
}
encodeAndSendbutton.addEventListener('click',()=>{
let originalInputStr=textInputElement.value
initialRes=originalInputStr
let encodedResult = "";
for (let char of originalInputStr) {
    encodedResult += String.fromCharCode(char.charCodeAt(0) + 1);
}
secondTextAreaElement.value=encodedResult
textInputElement.value=''
})
let decodeAndReadButton;
for (const btn of buttons) {
    if (btn.textContent === "Decode and read it") {
        decodeAndReadButton = btn;
        break;
    }
}
decodeAndReadButton.addEventListener('click',()=>{
    secondTextAreaElement.value=initialRes
})

}