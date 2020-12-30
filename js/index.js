let btnSurprise = document.getElementById("surpriseButton")
let pSurprise = document.getElementById("surpriseText") // paragraph tag of disclaimers

// Update disclaimer text
btnSurprise.addEventListener("click", function(){
    pSurprise.style.visibility = "visible"
    btnSurprise.style.visibility = "hidden"
})

