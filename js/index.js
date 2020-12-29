var btnSurprise = document.getElementById("surpriseButton")
var pSurprise = document.getElementById("surpriseText") // paragraph tag of disclaimers

// Update disclaimer text
btnSurprise.addEventListener("click", function(){
    pSurprise.style.visibility = "visible"
    btnSurprise.style.visibility = "hidden"
})

