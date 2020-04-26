import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, Button, View} from 'react-native';

import { createNewDeck } from '../storage'


class NewDeck extends React.Component {

    state = {
        text: ''
    }

    
    addNewDeck = () => {
        console.log("add deck")
        const title = this.state.text.trim()
        if (title !== "") {
            const newDeck = {
                title: title,
                questions: []
            }
            createNewDeck(newDeck).then( () => {
                this.props.navigation.navigate('Individual Deck', { item: newDeck })
            })
            this.setState({text: '' })
        }
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={{fontSize: 28, textAlign: 'center'}}>What is the title of your new deck ?</Text>

                <TextInput
                    value={this.state.text}
                    style={style.input}
                    onChangeText={text => this.setState({text})}/>

                <TouchableOpacity
                    onPress={this.addNewDeck}
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



export default NewDeck
