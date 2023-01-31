function focused() {
    let divElements=document.querySelectorAll('div div')

    for(el of divElements){
        let innerElements=el.children[1]
        innerElements.addEventListener('focus',(e)=>{
            for (div of divElements) {
                div.setAttribute("class","blurred")
            }
            e.currentTarget.parentElement.setAttribute("class","focused")

        })
        
    }
   
}

// // function focused() {
// //     let divElements=document.querySelectorAll('div div')

// //     for(el of divElements){
        
// //         el.addEventListener('mouseover',(e)=>{
// //             for (div of divElements) {
// //                 div.removeAttribute("class")
// //             }
// //             e.currentTarget.setAttribute("class","focused")

// //         })
        
// //     }
   
// // }

// function focused() {
//     let mainDiv = document.getElementsByTagName("div")[0];

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("focus",focus);
//     });

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("blur",focusLost);
//     });


//     function focus(e) {
//         let parent = e.target.parentNode;
//        parent.classList.add("focused");
//     }


//     function focusLost(e) {
//         let parent = e.target.parentNode;
//        parent.classList.remove("focused");
//     }

//  }