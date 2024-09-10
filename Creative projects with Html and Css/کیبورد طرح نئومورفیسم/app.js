const textInput = document.querySelector(".textInput")
const keyBoard = document.querySelectorAll(".key-board")

window.addEventListener("keyup", e =>{
    let {key} = e

    keyBoard.forEach(keyInput => {
        if(key.toUpperCase() === keyInput.value){
            keyInput.classList.add("input_focus")
            setTimeout(function(){
                keyInput.classList.remove("input_focus")
            },500)
        }
    })
})

// textInput.addEventListener("keyup", e => {
//     let {target} = e
//     console.log(target.value);
    
//     keyBoard.forEach(key => {
//         if(target.value.toUpperCase() === key.value){
//             key.classList.add("input_focus")
//             setTimeout(function(){
//                 key.classList.remove("input_focus")
//             },500)
//         }
//     })
// })