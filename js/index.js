const btnSurprise = document.getElementById("surpriseButton")
const pSurprise = document.getElementById("disclaimers") // paragraph tag of disclaimers
const quizForm = document.getElementById("quiz")

// Update disclaimer text
btnSurprise.addEventListener("click", function(){
    pSurprise.innerHTML += " Update: One new Emilia fan found!".bold()
    btnSurprise.style.display = 'none'
    btnSurprise.remove()
})

function handleForm(event) {
    event.preventDefault()
}

quizForm.addEventListener('submit', handleForm);
