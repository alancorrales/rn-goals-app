import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [onAddMode, setOnAddMode] = useState(false);

	const addGoalHandler = (goal) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: (Date.now() * Math.random()).toString(), value: goal },
		]);
		setOnAddMode(false);
	};

	const deleteGoalHandler = (goalID) => {
		setCourseGoals((currentGoals) =>
			currentGoals.filter((goal) => goal.key !== goalID)
		);
	};

	return (
		<View style={styles.container}>
			<Button title='Add new goal' onPress={() => setOnAddMode(true)} />
			<GoalInput
				openModal={onAddMode}
				onAddGoal={(goal) => addGoalHandler(goal)}
				onCancel={() => setOnAddMode(false)}
			/>
			<FlatList
				style={styles.list}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.key}
						title={itemData.item.value}
						onDelete={(id) => deleteGoalHandler(id)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	list: {
		marginTop: 10,
	},
});
