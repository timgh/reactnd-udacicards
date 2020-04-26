import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


export default class Quiz extends React.Component {

    state = {
        index: 0,
        correctAnswers: 0,
        showAnswear: false,
    }

    startQuiz = () => {
        this.setState({
            index: 0, 
            correctAnswers: 0,
            showAnswear: false
        })
    }

    onCorrect = () => {
        const { index, correctAnswers } = this.state
        this.setState({
            index: index + 1,
            correctAnswers: correctAnswers + 1,
            showAnswear: false
        })
    }

    onIncorrect = () => {
        const { index } = this.state
        this.setState({
            index: index + 1,
            showAnswear: false
        })
    }

    showAnswer = () => {
        this.setState({
            showAnswear: !this.state.showAnswear
        })
    }
    backToDeck = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { questions } = this.props.route.params.deck
        const { index, correctAnswers, showAnswear } = this.state
        const questionLeft = questions.length - index

        return (
            <View style={{ flex: 1 }}>
                { index < questions.length ? (
                    <View style={styles.container}>
                        <View style={[styles.group, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <Text>{questionLeft} / {questions.length}</Text>
                            </View>
                        </View>

                        <View style={[styles.group, { flex: 4 }]}>
                            <View>
                                {showAnswear ? (
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 36, textAlign: 'center' }}>{questions[index].answer}</Text>
                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{ fontSize: 18, color: 'green' }}>Question</Text>
                                        </TouchableOpacity>
                                    </View> ) : (
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontSize: 36, textAlign: 'center' }}>{questions[index].question}</Text>
                                            <TouchableOpacity onPress={this.showAnswer}>
                                                <Text style={{ fontSize: 18, color: 'red' }}>Answer</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 2 }}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={this.onCorrect}>
                                    <Text style={styles.btnGreen}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onIncorrect}>
                                    <Text style={styles.btnRed}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Text style={{textAlign: 'center', fontSize: 36}}>Score: {correctAnswers} of {questions.length}</Text>
                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={this.startQuiz}>
                                    <Text style={styles.btnGreen}>Start Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.backToDeck}>
                                    <Text style={styles.btnRed}>Back to Deck</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }
            </View>
        )
    }
}
          


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    btnGreen: {
        color: '#fff',
        backgroundColor: 'green',
        justifyContent: 'center',
        height: 30,
        textAlign: 'center',
        width: 200
    },
    btnRed: {
        color: '#fff',
        backgroundColor: 'red',
        justifyContent: 'center',
        height: 30,
        textAlign: 'center',
        width: 200,
        marginTop: 20
    }

})

