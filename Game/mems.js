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

let cardsFronts = [{name: 'card1', img: './images/card1.png'}, {name: 'card2', img: './images/card2.png'}, 
                {name: 'card3', img: './images/card3.png'}, {name: 'card4', img: './images/card4.png'}, 
                {name: 'card5', img: './images/card5.png'}, {name: 'card6', img: './images/card6.png'}, 
                {name: 'card7', img: './images/card7.png'}, {name: 'card8', img: './images/card8.png'}, 
                {name: 'card9', img: './images/card9.png'}, {name: 'card10', img: './images/card10.png'}]



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

/*  const revealCards = () => {

// select card 1
// select card 2
// if match: leave overturned and disable
// if not a match: reset cards to downward position
// }
}*/

const flipCards = () => {
    for (let i=0; i < cardsFronts.length * 2; i++)
    console.log('cardFronts')
}

let showCard = cardsContainer.querySelectorAll('cards')
cards.addEventListener('click', flipCards)


// let clickCard = event.Target.className = 'cards'



//getCards()
//randomizeCards()
flipCards()

