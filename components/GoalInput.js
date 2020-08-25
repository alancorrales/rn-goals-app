import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native'

const GoalInput = ({ onAddGoalHandler }) => {
    const [goal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text);
    }

    return (
        <View style={styles.addGoalSection}>
            <TextInput placeholder="Add a course goal" value={goal} onChangeText={goalInputHandler} style={styles.inputGoal} />
            <Button title="ADD" onPress={() => onAddGoalHandler(goal)} style={styles.addGoalButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    addGoalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    inputGoal: {
        width: '80%',
        borderBottomColor: 'black', borderBottomWidth: 1
    },
    addGoalButton: {
        width: 10
    },
})


export default GoalInput
