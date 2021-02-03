//button blendet Antwort ein; Lösung mit IDs
//const button = document.querySelector('#button1')
//const answer = document.querySelector('#answer1')
//button.addEventListener('click', () => {
    // answer.classList.toggle('hidden')
//})

//Für alle Buttons auf einmal anwenden
const buttons = document.querySelectorAll('.card__button');

buttons.forEach((mybutton) => {
    mybutton.addEventListener('click', () => {
        const answer = mybutton.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        mybutton.innerText = answer.classList.contains('hidden')
        ? 'Lösung anzeigen'
        : 'Lösung verbergen';
    })
})
       
//