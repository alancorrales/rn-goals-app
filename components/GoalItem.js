import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const GoalItem = ({ id, title, onDelete }) => (
    <TouchableWithoutFeedback onPress={() => onDelete(id)}>
        <View style={styles.listItem}>
            <Text>
                {title}
            </Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem