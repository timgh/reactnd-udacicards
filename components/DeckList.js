import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text, FlatList} from 'react-native'

import { getDecks } from '../storage'

class DeckList extends React.Component {

    state = {
        decks: []
    }

    componentDidMount() {
        getDecks().then( (result) => {
            this.setState({decks: result})
        }) 
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            getDecks().then( (result) => {
                this.setState({decks: result})
            }) 
        })
      }
    
      componentWillUnmount() {
        this.unsubscribe()
      }
    

    renderItem = ({ item }) => {
        //console.log("render item")
        //console.log(item)
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Individual Deck', {item})}>
                <View style={styles.deck}>
                    <Text style={{ fontSize: 24 }}>{item.title}</Text>
                    <Text style={{ fontSize: 18, color: '#666666' }}>
                        {item.questions && item.questions.length} cards
                     </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        //console.log(decks)
        //console.log(Object.values(decks))
        return (
            <View style={styles.decks}>
                <FlatList
                    data={Object.values(this.state.decks)}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.title}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    decks: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deck: {
        marginTop: 12,
        height: 110,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})

export default DeckList