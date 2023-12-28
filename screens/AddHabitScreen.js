import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux'
import { addHabit } from './../redux/actions.js'

import ScrollViewList from './../ScrollViewList.js';

const colourOptions = [
  { title: 'blue', value: '#18CAE6' },
  { title: 'orange', value: '#DF740C' },
  { title: 'yellow', value: '#FFE64D' },
  { title: 'green', value: '#59E817' },
  { title: 'purple', value: '#7D12FF' },
];

class AddHabitScreen extends React.Component {
  state = {
    colour: colourOptions[Math.floor(Math.random() * colourOptions.length)],
    habitTitle: '',
    placeholderText: 'Habit Name...',
    numDays: 28,
  };

  onSelectColour = colour => () => {
    this.setState(() => ({ colour }));
  };

  updateHabitTitle = val => {
    if (val.length < 25) {
      this.setState(() => ({ habitTitle: val }));
    }
  };

  updateNumDays = val => {
    if (0 < val <= 365){
      this.setState(()=> ({ numDays: val }));
    }
  };

  submitAddHabit = () => {
    if (this.state.habitTitle.length > 0) {
      if (this.props.habits.filter(habit => habit.title === this.state.habitTitle).length === 0) {
        this.props.habits.map(habit => console.log(habit.title))
        console.log(this.state.habitTitle)
        this.props.addHabit(
          this.state.habitTitle,
          this.state.colour.value,
          this.state.numDays
        );

        this.props.navigation.navigate('Main');
      } else {
        alert("this habit already exists")
      }
    } else {
      this.setState(() => ({ placeholderText: 'Enter Title!' }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TextInput
          placeholder={this.state.placeholderText}
          placeholderTextColor={this.state.colour.value}
          value={this.state.habitTitle}
          onChangeText={this.updateHabitTitle}
          style={[
            styles.titleText,
            styles.habitTextInput,
            { color: this.state.colour.value },
          ]}
        />
        <View style={{height: 30, flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 15}}>
          <Text style={styles.subTitleText}>Length:</Text>
          <TextInput
            placeholder={this.state.numDays}
            placeholderTextColor={'#D8DAE7'}
            value={this.state.numDays}
            onChangeText={this.updateNumDays}
            style={[styles.subTitleText, {marginHorizontal: 4, color: '#D8DAE7'}]}
            keyboardType='number-pad'
          />
          <Text style={styles.subTitleText}>days</Text>
        </View>
        <ScrollViewList
          coloursArray={colourOptions}
          currentColour={this.state.colour.title}
          onSelectColour={this.onSelectColour}
        />
        <View>
          <TouchableOpacity onPress={this.submitAddHabit}>
            <View style={styles.submitButtonContainer}>
              <Text style={styles.titleText}>
                Add Habit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          title="cancel"
          color="grey"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  habits: state.habits,
});

const mapDispatchToProps = {
  addHabit,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0C141F',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D8DAE7',
  },
  subTitleText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  habitTextInput: {
    borderBottomWidth: 2,
    borderColor: 'grey',
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  submitButtonContainer: {
    borderWidth: 2,
    borderColor: 'grey',
    marginTop: 25,
    marginBottom: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    width: 250,
    borderStyle: 'dashed',
  },
});
