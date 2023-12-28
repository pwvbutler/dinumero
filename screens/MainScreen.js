import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { deleteHabit } from './../redux/actions.js';

import { appColours } from './../colours.js';

const NUM_COLUMNS = 5;
const PADDING = 0;

class MainScreen extends React.Component {
  
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          {this.props.habits.map((habit, index) => (
            <TouchableOpacity
              style={[styles.habitButton, { borderColor: habit.colour }]}
              onPress={() =>
                this.props.navigation.navigate('Habit', {...habit})
              }
              onLongPress={() => this.props.deleteHabit(habit.title)}>
              <Text style={[styles.titleText, { color: habit.colour }]}>
                {habit.title}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.addHabitButton}
            onPress={() => this.props.navigation.navigate('AddHabit')}>
            <Text style={[styles.titleText]}>Add Habit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  habits: state.habits,
});

const mapDispatchToProps = {
  deleteHabit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);

const styles = StyleSheet.create({
  container: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appColours.black,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  habitText: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 80,
    paddingRight: 80,
  },
  habitButton: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 90,
    width: 275,
    marginVertical: 14,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  addHabitButton: {
    height: 90,
    width: 275,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 14,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  habitContainer: {
    margin: 20,
    borderWidth: 4,
    borderColor: 'black',
  },
  addHabitContainer: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
});
