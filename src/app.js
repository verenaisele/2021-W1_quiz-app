//button blendet Antwort ein
const button = document.querySelector('#button1')
const answer = document.querySelector('#answer1')

button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
})

const button2 = document.querySelector('#button2')
const answer2 = document.querySelector('#answer2')

button2.addEventListener('click', () => {
    answer2.classList.toggle('hidden')
})

//Bookmark gefüllt oder leer
