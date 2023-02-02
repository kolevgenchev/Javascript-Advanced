function solve() {
   let productsElements=document.getElementsByClassName('product')
   let textAreaElement=document.getElementsByTagName('textarea')[0]
   let boughtProducts=''
    let finalPrice=0
let els=Array.from(productsElements)
   for(el of els){
    let moneyElement=el.getElementsByClassName('product-line-price')[0]
    let productTitle=el.getElementsByClassName('product-title')[0]
    let buttons=el.getElementsByClassName('add-product')[0]

    buttons.addEventListener('click',()=>{
       textAreaElement.innerHTML+=`Added ${productTitle.textContent} for ${moneyElement.textContent} to the cart.\n`
       if(!boughtProducts.includes(productTitle.textContent)){
        boughtProducts+=productTitle.textContent+", "
       }
       
       finalPrice+=Number(moneyElement.textContent)
    })
}
let checkOutElement=document.getElementsByClassName('checkout')[0]
checkOutElement.addEventListener('click',()=>{
    textAreaElement.value+=`You bought ${boughtProducts.slice(0,boughtProducts.length-2)} for ${finalPrice.toFixed(2)}.`
    checkOutElement.disabled='true'
})

}