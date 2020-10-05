console.log('Remember, remember..')


let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

let container = document.createElement('div')
container.setAttribute('class', 'cards')
document.body.appendChild(container)

let shuffleButton = document.createElement('button')
shuffleButton.setAttribute('id', 'button')
shuffleButton.innerText = "Get Cards"
btnContainer.appendChild(shuffleButton)

let timer = 45
let matches = 0

// create the deck
const getCards = () => {
    shuffleButton.addEventListener('click', function() {
    disableButton()
    for (let i=0; i < 30; i++) {
    let cards = document.createElement('img')
    cards.setAttribute('class', 'cards')
    cards.setAttribute('src', './images/back.png')
    container.appendChild(cards)
        }
    })
}

const disableButton = () => {
    shuffleButton.removeEventListener('click', function() {
        alert('You have already clicked this.')
    })
}

getCards()