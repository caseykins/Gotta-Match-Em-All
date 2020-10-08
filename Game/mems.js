console.log('Remember, remember..')


let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

let cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cardsContainer')
document.body.appendChild(cardsContainer)


let cardFronts = [{name: 'card1', img: './images/card1.png', value: 'primape'}, {name: 'card2', img: './images/card2.png', value: 'scyther'}, 
                {name: 'card3', img: './images/card3.png', value: 'gyarados'}, {name: 'card4', img: './images/card4.png', value: 'haunter'}, 
                {name: 'card5', img: './images/card5.png', value: 'kabutops'}, {name: 'card6', img: './images/card6.png', value: 'aerodactyl'}, 
                {name: 'card7', img: './images/card7.png', value: 'zapdos'}, {name: 'card8', img: './images/card8.png', value: 'beedrill'}, 
                {name: 'card9', img: './images/card9.png', value: 'kadabra'}, {name: 'card10', img: './images/card10.png', value: 'cubone'},
                {name: 'card11', img: './images/card11.png', value: 'primape'}, {name: 'card12', img: './images/card12.png', value: 'scyther'}, 
                {name: 'card13', img: './images/card13.png', value: 'gyarados'}, {name: 'card14', img: './images/card14.png', value: 'haunter'}, 
                {name: 'card15', img: './images/card15.png', value: 'kabutops'}, {name: 'card16', img: './images/card16.png', value: 'aerodactyl'}, 
                {name: 'card17', img: './images/card17.png', value: 'zapdos'}, {name: 'card18', img: './images/card18.png', value: 'beedrill'}, 
                {name: 'card19', img: './images/card19.png', value: 'kadabra'}, {name: 'card20', img: './images/card20.png', value: 'cubone'}]



// create the deck
const getCards = () => {
        for (let i=0; i < cardFronts.length; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('class', 'cards')
        cards.setAttribute('name', cardFronts[i].name)
        cards.setAttribute('src', './images/back.png')
        cards.setAttribute('value', cardFronts[i].value)
        cards.addEventListener('click', flipCards)
        cardsContainer.appendChild(cards)
        // allow button to only be clicked once
        cardsButton.removeEventListener('click', getCards)
        }
    }

    let cardsButton = document.createElement('button')
    cardsButton.setAttribute('id', 'button')
    cardsButton.innerText = "Get Cards"
    btnContainer.appendChild(cardsButton)
    cardsButton.addEventListener('click', () => {
        shuffle()
        getCards()
    })


const shuffle = (array) => {
    cardFronts.sort(function (a, b) {
        return .5 - Math.random()
        })
    }


const flipCards = (e) => {
        e.target.name
        console.log(e.target.name)
        e.target.setAttribute('src', `./images/${e.target.name}.png`)
    }    

const findMatches = (e) => {
    let card1 = document.querySelector(cardFronts[i]).getAttribute('value')
    let card2 = document.querySelector(cardFronts[i]).getAttribute('value')

    if (card1.id === card2.id) {
        remove(e.target)

    } else if (cardFronts[i].id !== cardFronts[i].id) {
        return nothing //??
    }
}

    // select card 1
    // select card 2
    // if match: leave overturned and disable
    // if not a match: reset cards to downward position

//      if (card 1 === card 2)
//          disable event listener
//          count as a turn

//      else if card 1 !== card 2)
//          reset cards to original state
//          count as a turn

//      repeat until all matches are found, keeping tally of each turn (one pair)


const gameTimer = (e) => {
    
    timer = 60

    const timerInterval = setInterval(() => {
        if (timer === 0) {
            document.querySelector(cards).removeEventListener('click', getCards)
            alert("Time's Up!")
        }
        const timerText = document.getElementById('timer')
        timerText.innerHTML = `Timer: ${timer} Seconds`

    }, 600)

}

cardsButton.addEventListener('click', () => {
    gameTimer()
})

// once timer ends, no more clicks allowed
// alert that shows how many turns were taken and how many pairs were found
