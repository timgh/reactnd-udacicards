import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'decks:udacicards5'


let initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
}

export function getDecks() {
    console.log("getDecks")
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        console.log(results)
        if ( results === null ) {
            console.log("use initialData")
            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(initialData))
            return initialData
        }
        return JSON.parse(results)
    })
}

export function createNewDeck(deck) {
    console.log("createNewDeck")
    console.log(deck)
    console.log({[deck.title]: deck})
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[deck.title]: deck}))
}

export function createNewQuestionForDeck({ card, deckName }) {
    console.log("createNewQuestionForDeck")
    console.log(card)
    console.log(deckName)
    return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
        let decks = JSON.parse(result)

        let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions))
        newQuestions[newQuestions.length] = card

        const value = JSON.stringify({
            [deckName]: { title: deckName, questions: newQuestions },
        })

        AsyncStorage.mergeItem(STORAGE_KEY, value)
    })
}

