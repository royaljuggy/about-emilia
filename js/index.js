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

    const ANSWERS = ['puck', 're:zero']
    
    const inputAns1 = document.getElementById("q1");
    const inputAns2 = document.getElementById("q2");

    // Logging each question's answer
    let user_answers = [];
    user_answers.push(inputAns1.value)
    user_answers.push(inputAns2.value)

    // Checking if the user's answers are correct
    let allCorrect = true
    for (let i=0; i < user_answers.length; i++) {
        if (ANSWERS[i] !== user_answers[i].toLowerCase()) {
            allCorrect = false;
            break;
        }
    }
    
    const output_paragraph = document.getElementById('quiz-outcome')

    if (allCorrect) {
        output_paragraph.innerText = "Correct!"
    } else {
        output_paragraph.innerText = "One or more answer is incorrect..."
    }
}

quizForm.addEventListener('submit', handleForm);
