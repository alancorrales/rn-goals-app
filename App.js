import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: (Date.now() * Math.random()).toString(), value: goal }]);
  }

  return (
    // Inline-styling with no special syntax!
    // Only normal react syntax with an object inside!
    <View style={styles.container}>
      <GoalInput onAddGoalHandler={goal => addGoalHandler(goal)} />

      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
})