function attachGradientEvents() {
    let hoverArea=document.getElementById('gradient')
    let resultArea=document.getElementById('result')
    hoverArea.addEventListener('mousemove',(e)=>{
        console.log(e)
       let curResult=Math.floor(e.offsetX/300*100)
       resultArea.textContent=curResult+"%"
    })
}