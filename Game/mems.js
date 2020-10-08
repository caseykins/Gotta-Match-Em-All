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

let turns = 0

let clickedCards = []

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
        cardsButton.removeEventListener('click', startGame)
        }
    }

const startGame = () => {
    shuffle()
    getCards()
    }

let cardsButton = document.createElement('button')
cardsButton.setAttribute('id', 'button')
cardsButton.innerText = "Get Cards"
btnContainer.appendChild(cardsButton)
cardsButton.addEventListener('click', startGame)


const shuffle = (array) => {
    cardFronts.sort(function (a, b) {
        return .5 - Math.random()
        })
    }


const flipCards = (e) => {
        e.target.name
        //console.log(e.target.name)
        e.target.setAttribute('src', `./images/${e.target.name}.png`)
        clickedCards.push(e.target)
        findMatches()
    }    

const findMatches = () => {

    if ( clickedCards.length === 2) {

        let firstCard = clickedCards[0]
        let secondCard = clickedCards[1]

        if (firstCard.getAttribute('value') === secondCard.getAttribute('value')) {
            firstCard.removeEventListener('click', startGame)
            secondCard.removeEventListener('click', startGame)
            clickedCards = []
            console.log('This is a match!')
            // removeEventListener('click', flipCards)
            turns ++

        } else if (firstCard.getAttribute('value') !== secondCard.getAttribute('value')) {
            clickedCards = []
            // firstCard.setAttribute('src', './images/back.png')
            // secondCard.setAttribute('src', './images/back.png')
            console.log('This is not a match.')
            turns ++
            
            setTimeout(function() {
                // this.firstCard[0].setAttribute('src', './images/back.png')
                // this.secondCard[1].setAttribute('src', './images/back.png')
                firstCard.setAttribute('src', './images/back.png')
                secondCard.setAttribute('src', './images/back.png')
                //firstCard.shift();
                //secondCard.shift();
            }, 1250)
    }
    const turnCounter = document.getElementById('turns')
        turnCounter.innerHTML = `Turns: ${turns}`
    }
}

const gameTimer = (e) => {
    
    timer = 3

    const timerInterval = setInterval(() => {
        timer --
        if (timer === 0) {

            // let cards = document.querySelectorAll('.cards')
            // console.log('.cards')

            // for (let i=0; i<cards.length; i++)
            // getCards.removeEventListener('click', cards)

            // gives array of all cards
            // save as an array
            // loop through accessing each element and add remove event listener on each

            // cards.removeEventListener('click', flipCards)
            clearInterval(timerInterval)
            alert("Time's Up! Want to try again?")
            window.location.reload();
        }

        const timerText = document.getElementById('timer')
        timerText.innerHTML = `Time Left: ${timer} Seconds`

    }, 1000)
    
}

cardsButton.addEventListener('click', () => {
    gameTimer()
})



