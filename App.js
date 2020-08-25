import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: (Date.now() * Math.random()).toString(), value: goal }]);
  }

  const deleteGoalHandler = (goalID) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.key !== goalID));
  }

  return (
    // Inline-styling with no special syntax!
    // Only normal react syntax with an object inside!
    <View style={styles.container}>
      <GoalInput onAddGoal={goal => addGoalHandler(goal)} />

      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={id => deleteGoalHandler(id)} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
})