let btnSurprise = document.getElementById("surpriseButton")
let pSurprise = document.getElementById("disclaimers") // paragraph tag of disclaimers

// Update disclaimer text
btnSurprise.addEventListener("click", function(){
    pSurprise.innerHTML += " <strong>Update: One new Emilia fan found!</strong>"
    btnSurprise.style.visibility = 'hidden'
})

