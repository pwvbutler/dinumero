import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHabit } from '../redux/actions';
import { appColours } from '../colours';

const MainScreen = ({ navigation }) => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        {habits.map((habit) => (
          <TouchableOpacity
            key={habit.title}
            style={[styles.habitButton, { borderColor: habit.colour }]}
            onPress={() => navigation.navigate('Habit', habit)}
            onLongPress={() => dispatch(deleteHabit(habit.title))}
          >
            <Text style={[styles.titleText, { color: habit.colour }]}>{habit.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addHabitButton} onPress={() => navigation.navigate('AddHabit')}>
          <Text style={styles.titleText}>Add Habit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: appColours.black,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  habitButton: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 90,
    width: 275,
    marginVertical: 14,
    justifyContent: 'center',
    borderWidth: 2,
  },
  addHabitButton: {
    height: 90,
    width: 275,
    borderWidth: 2,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
});
