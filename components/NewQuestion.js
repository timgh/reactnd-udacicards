import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, Button, View} from 'react-native';

import { createNewQuestionForDeck } from '../storage'


class NewQuestion extends React.Component {

    state = {
        question: '',
        answer: ''
    }

    addNewQuestion = () => {
        console.log("add question")
        const { deck } = this.props.route.params
        const { question, answer } = this.state
        createNewQuestionForDeck({
            card: {question, answer},
            deckName: deck.title
        }).then ( () => {
            //this.props.navigation.goBack()
            //this.props.navigation.navigate('Individual Deck', { item: newDeck })
            this.props.navigation.navigate('Decks') 
        })
       
    }

    render() {
        const {question, answer} = this.state;

        return (
            <View style={style.container}>
                <Text style={style.text}>Question</Text>
                <TextInput
                    value={question}
                    style={style.input}
                    onChangeText={question => this.setState({question})}/>
                <Text style={style.text}>Answer</Text>
                <TextInput
                    value={answer}
                    style={style.input}
                    onChangeText={answer => this.setState({answer})}/>

                <TouchableOpacity
                    onPress={this.addNewQuestion}
                    style={style.submitButton}>
                    <Text style={style.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    text: {
        fontSize: 28
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 24,
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 10,
        height: 44,
    },
    submitText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
})



export default NewQuestion
