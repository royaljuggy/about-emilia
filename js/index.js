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
    output_paragraph.style.display = 'inline-block'

    if (allCorrect) {
        output_paragraph.innerText = "Correct!"
    } else {
        output_paragraph.innerText = "One or more answer is incorrect..."
    }
}

quizForm.addEventListener('submit', handleForm);

// *** Carousel functionality ***

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide);
document.getElementById("carousel-button-next").addEventListener('click', moveToNextSlide);

// assumes all slides except the current one is on display:none;
function moveToPrevSlide() { 

    slides[slidePosition].classList.remove('carousel-item-visible'); // hide current slide **

    if (slidePosition === 0) { 
        // go to end of carousel if at the first item
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    // show new slide
    slides[slidePosition].classList.add("carousel-item-visible"); 
}

// assumes all slides except the current one is on display:none;
function moveToNextSlide() { 

    slides[slidePosition].classList.remove('carousel-item-visible'); // hide current slide **

    if (slidePosition === totalSlides - 1) { 
        // go to beginning of carousel if at last item
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    // show new slide
    slides[slidePosition].classList.add("carousel-item-visible"); 
}

// *** END carousel functionality ***
