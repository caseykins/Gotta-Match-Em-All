console.log('Remember, remember..')



let container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)



// create the deck
const createCards = () => {
    for (let i=0; i < 30; i++) {
    let cards = document.createElement('img')
    cards.setAttribute('class', 'cards')
    cards.setAttribute('src', './images/back.png')
    container.appendChild(cards)
    }
}

createCards()