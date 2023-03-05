 function solve() {
    let infoBoxElement=document.getElementsByClassName('info')[0]
    let departBtnEl=document.getElementById('depart')
    let arriveBtnEl=document.getElementById('arrive')
    let stopId={
        next:'depot'
    }
    let response={}
    async function depart() {
        let url=`http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`
        let data=await fetch(url)
         response=await data.json()
        stopId.next=response.next
        infoBoxElement.textContent=`Next stop ${response.name}`
        departBtnEl.disabled=true
        arriveBtnEl.disabled=false
    }

        function arrive() {
        infoBoxElement.textContent=`Arriving at ${response.name}`
        departBtnEl.disabled=false
        arriveBtnEl.disabled=true
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();