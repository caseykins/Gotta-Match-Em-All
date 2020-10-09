console.log('Remember, remember..')

// create container for Get Cards Button
let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

// create container for the cards
let cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cardsContainer')
document.body.appendChild(cardsContainer)

// add images and values to the cards
let cardFronts = [{name: 'card1', img: 'images/card1.png', value: 'primape'}, {name: 'card2', img: './images/card2.png', value: 'scyther'}, 
                {name: 'card3', img: './images/card3.png', value: 'gyarados'}, {name: 'card4', img: './images/card4.png', value: 'haunter'}, 
                {name: 'card5', img: './images/card5.png', value: 'kabutops'}, {name: 'card6', img: './images/card6.png', value: 'aerodactyl'}, 
                {name: 'card7', img: './images/card7.png', value: 'zapdos'}, {name: 'card8', img: './images/card8.png', value: 'beedrill'}, 
                {name: 'card9', img: './images/card9.png', value: 'kadabra'}, {name: 'card10', img: './images/card10.png', value: 'cubone'},
                {name: 'card11', img: './images/card11.png', value: 'primape'}, {name: 'card12', img: './images/card12.png', value: 'scyther'}, 
                {name: 'card13', img: './images/card13.png', value: 'gyarados'}, {name: 'card14', img: './images/card14.png', value: 'haunter'}, 
                {name: 'card15', img: './images/card15.png', value: 'kabutops'}, {name: 'card16', img: './images/card16.png', value: 'aerodactyl'}, 
                {name: 'card17', img: './images/card17.png', value: 'zapdos'}, {name: 'card18', img: './images/card18.png', value: 'beedrill'}, 
                {name: 'card19', img: './images/card19.png', value: 'kadabra'}, {name: 'card20', img: './images/card20.png', value: 'cubone'}]

// Define starting turn value
let turns = 0

// add a value for # of matches for win condition
let matches = 0

// create array for paired cards
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

// This function is to differentiate event listeners
const startGame = () => {
    shuffle()
    getCards()
    }

// button starts game by randomizing cards
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

// add a targeted event listener for each card to flip
const flipCards = (e) => {
        e.target.name
        e.target.setAttribute('src', `./images/${e.target.name}.png`)
        clickedCards.push(e.target)
        findMatches()
    }    

// compares card values by using the empty array above (clickedCards[])
const findMatches = () => {

    let matches = 0

    if ( clickedCards.length === 2) {

        let firstCard = clickedCards[0]
        let secondCard = clickedCards[1]

        // finding a match should disable both cards from being clicked again
        if (firstCard.getAttribute('value') === secondCard.getAttribute('value')) {
            firstCard.removeEventListener('click', startGame)
            secondCard.removeEventListener('click', startGame)
            clickedCards = []
            console.log('This is a match!')
            // each pair of clicks registers as one turn
            turns ++
            matches++
            // after completing the board, the game should end
            if (matches === 10) {
                clearInterval(timerInterval)
                window.alert('Congratulations, you won! Would you like to play again?')
                window.location.reload()
            }
        // click a pair resulting in not a match will return each card to its default position
        } else if (firstCard.getAttribute('value') !== secondCard.getAttribute('value')) {
            clickedCards = []
            console.log('This is not a match.')
            // each pair of clicks registers as one turn
            turns ++
            
            // this resets cards to default in 1.25 seconds
            setTimeout(function() {
                firstCard.setAttribute('src', './images/back.png')
                secondCard.setAttribute('src', './images/back.png')
            }, 1250)
    }
    // update turns as the game goes on
    const turnCounter = document.getElementById('turns')
        turnCounter.innerHTML = `Turns: ${turns}`
    }
}

// defines the maximum duration of the game at one minute
const gameTimer = (e) => {
    
    timer = 60
    
    const timerInterval = setInterval(() => {
        timer --
        if (timer === 0) {

            let cards = document.querySelectorAll('.cards')
            //console.log(cards)

            for (let i=0; i<cards.length; i++){
            cards[i].removeEventListener('click', findMatches)
            cards[i].removeEventListener('click', findMatches)
            }
            // once timer ends, player is prompted with this message and the option to play again
            clearInterval(timerInterval)
            alert("Time's Up! Want to try again?")
            window.location.reload();
        }
        // tracks the seconds in real time
        const timerText = document.getElementById('timer')
        timerText.innerHTML = `Time Left: ${timer} Seconds`

    }, 1000)
    
}
// hitting the Get Cards button starts the timer
cardsButton.addEventListener('click', () => {
    gameTimer()
})



