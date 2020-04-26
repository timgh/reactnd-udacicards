import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList'
import IndividualDeck from './components/IndividualDeck'
import Quiz from './components/Quiz'
import NewQuestion from './components/NewQuestion'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="New Deck" component={NewDeck} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="udacicards" component={Home} />
                <Stack.Screen name="Individual Deck" component={IndividualDeck} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="NewQuestion" component={NewQuestion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

