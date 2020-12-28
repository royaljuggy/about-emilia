var btnSurprise = document.getElementById("surpriseButton")
var pDisclaimers = document.getElementById("disclaimers") // paragraph tag of disclaimers

// Update disclaimer text
btnSurprise.addEventListener("click", function(){
    pDisclaimers.textContent += " Update: One new Emilia fan found!"
    btnSurprise.style.visibility = "hidden"
})

