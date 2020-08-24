import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, goal]);
  }

  return (
    // Inline-styling with no special syntax!
    // Only normal react syntax with an object inside!
    <View style={styles.container}>
      <View style={styles.addGoalSection}>
        <TextInput placeholder="Add a course goal" value={goal} onChangeText={goalInputHandler} style={styles.inputGoal} />
        <Button title="ADD" onPress={addGoalHandler} style={styles.addGoalButton} />
      </View>

      <View style={styles.goalsList}>
        {courseGoals.map((goal, i) => (
          <View key={i} style={styles.listItem}>
            <Text>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
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
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})