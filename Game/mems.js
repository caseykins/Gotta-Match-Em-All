console.log('Remember, remember..')


let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

let cards = document.createElement('img')
cards.setAttribute('class', 'cards')
cards.setAttribute('src', './images/back.png')

let container = document.createElement('div')
container.setAttribute('class', 'cards')
document.body.appendChild(container)








// create the deck
let getCards = () => {
        for (let i=0; i < 20; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('class', 'cards')
        cards.setAttribute('src', './images/back.png')
        container.appendChild(cards)
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
 const randomizeCards = () => {
     let randomOrder = Math.floor(Math.random() * 20)
     cards.style.order = randomOrder

    //  let cardFronts = document.createElement('img')
    //  cardFronts.setAttribute('class', 'cardfronts')
    //  cardFronts.setAttribute('src', `./images/card${i}.png`)
     }



    //                                 NEED TO DETERMINE WHERE CARD FRONTS GO (randomize, get cards, reveal cards?)

// const revealCards = () => {

// select card 1

// select card 2

// if match: leave overturned and disable

// if not a match: reset cards to downward position



// }
//}


//getCards()
//randomizeCards()

