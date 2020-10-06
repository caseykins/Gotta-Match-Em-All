console.log('Remember, remember..')


let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

let cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cardsContainer')
document.body.appendChild(cardsContainer)

let cards = document.createElement('img')
cards.setAttribute('class', 'cards')
cards.setAttribute('src', './images/back.png')

let cardFronts = document.createElement('img')
// cardsFronts.setAttribute('class', 'cardFronts')
// cardsFronts.setAttribute('src', `./images/card${i}.png`)
// cardsFronts.setAttribute('value', i)


// create the deck
let getCards = () => {
        for (let i=0; i < 20; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('class', 'cards')
        cards.setAttribute('src', './images/back.png')
        cardsContainer.appendChild(cards)
        // allow button 
        cardsButton.removeEventListener('click', getCards)
        }
    }

    let cardsButton = document.createElement('button')
    cardsButton.setAttribute('id', 'button')
    cardsButton.innerText = "Get Cards"
    btnContainer.appendChild(cardsButton)
    cardsButton.addEventListener('click', getCards)


// currently not working
//const randomizeCards = () => {
//     let randomOrder = Math.floor(Math.random() * 20)
//     cards.style.order = randomOrder

    //  let cardFronts = document.createElement('img')
    //  cardFronts.setAttribute('class', 'cardfronts')
    //  cardFronts.setAttribute('src', `./images/card${i}.png`)
//    }



    //                     NEED TO DETERMINE WHERE CARD FRONTS GO (randomize, get cards, reveal cards?)

/*const revealCards = () => {
    cards.addEventListener('click', flipCards)
    let cards = document.createElement('img')
    cards.setAttribute('id', 'cardFronts')
    cards.setAttribute('src', `./images/card${i}.png`)
// select card 1
// select card 2
// if match: leave overturned and disable
// if not a match: reset cards to downward position
// }
}*/

const flipCards = () => {
    for (let i=0; i < 20; i++)
    cardFronts = document.createElement('img')
    cardsFronts.setAttribute('class', 'cardFronts')
    cardsFronts.setAttribute('src', `./images/card${i}.png`)
    cardsFronts.setAttribute('value', i)
}

let showCard = cardsContainer.querySelectorAll('cards')
cards.addEventListener('click', flipCards)



//getCards()
//randomizeCards()
flipCards()

