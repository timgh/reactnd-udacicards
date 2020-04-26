import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Dimensions} from 'react-native'


class IndividualDeck extends React.Component {

    render() {
        const deck = this.props.route.params.item
        console.log("Individual Deck")
        console.log(deck)

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24 }}>{deck.title}</Text>
                <Text style={{ fontSize: 18, color: '#666666' }}>
                    {deck.questions && deck.questions.length} cards
                </Text> 
                <View style={{padding:40}}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewQuestion', {deck})}
                                  style={styles.btn}>
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <View style={{padding:10}}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', {deck})}
                                  style={styles.btn}>
                    <Text style={styles.btnText}>Start Quizz</Text>
                </TouchableOpacity>
                <View style={{padding:10}}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deck: {
        flexDirection: 'row',
        marginTop: 12,
        height: 110,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderBtn: {
        backgroundColor: 'grey',
        margin: 24,
        padding: 10,
        borderRadius: 7,
        borderWidth : 5,
        borderColor: '#000',
        height: 45,
    },
    addCardBtn: {
        backgroundColor: 'grey',
        margin: 24,
        padding: 10,
        borderRadius: 7,
        borderColor: '#000',
        height: 45,
    },
    startQuizBtn: {
        backgroundColor: '#000',
        margin: 24,
        padding: 10,
        height: 45,
        borderRadius: 2,
    },

    btn: {
        backgroundColor: '#000',
        padding: 10,
        height: 44,
    },
    btnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    
})

export default IndividualDeck