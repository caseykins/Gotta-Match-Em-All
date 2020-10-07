console.log('Remember, remember..')


let btnContainer = document.createElement('div')
btnContainer.setAttribute('class', 'button')
document.body.appendChild(btnContainer)

let cardsContainer = document.createElement('div')
cardsContainer.setAttribute('class', 'cardsContainer')
document.body.appendChild(cardsContainer)


let cardFronts = [{name: 'card1', img: './images/card1.png'}, {name: 'card2', img: './images/card2.png'}, 
                {name: 'card3', img: './images/card3.png'}, {name: 'card4', img: './images/card4.png'}, 
                {name: 'card5', img: './images/card5.png'}, {name: 'card6', img: './images/card6.png'}, 
                {name: 'card7', img: './images/card7.png'}, {name: 'card8', img: './images/card8.png'}, 
                {name: 'card9', img: './images/card9.png'}, {name: 'card10', img: './images/card10.png'},
                {name: 'card11', img: './images/card11.png'}, {name: 'card12', img: './images/card12.png'}, 
                {name: 'card13', img: './images/card13.png'}, {name: 'card14', img: './images/card14.png'}, 
                {name: 'card15', img: './images/card15.png'}, {name: 'card16', img: './images/card16.png'}, 
                {name: 'card17', img: './images/card17.png'}, {name: 'card18', img: './images/card18.png'}, 
                {name: 'card19', img: './images/card19.png'}, {name: 'card20', img: './images/card20.png'}]


// create the deck
let getCards = () => {
        for (let i=0; i < cardFronts.length; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('class', 'cards')
        cards.setAttribute('name', cardFronts[i].name)
        cards.setAttribute('src', './images/back.png')
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


let shuffle = (array) => {
    cardFronts.sort(function (a, b) {
        return .5 - Math.random()
        })
    }


const flipCards = (e) => {
    // for (let i=0; i < cardFronts.length; i++)
        e.target.name
        console.log(e.target.name)
        e.target.setAttribute('src', `./images/${e.target.name}.png`)
    }    

    // cardsContainer.addEventListener('click', e => {
    //     e.target.name
        // parseInt(cardsContainer.cards.getAttribute('value', i))



    




    // on click: replace image with CardFronts
    //      *Need two of each image*

    // select card 1
    // select card 2
    // if match: leave overturned and disable
    // if not a match: reset cards to downward position

//      if (card 1 === card 2)
//          disable

//      else if card 1 !== card 2)
//          flip over


// gameTimer()

// once timer ends, no more clicks allowed
// alert that shows how many turns were taken and how many pairs were found

//shuffle()
//getCards()
//randomizeCards()
//flipCards()
