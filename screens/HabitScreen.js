import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import { Constants } from 'expo';
import { connect } from 'react-redux'
import { appColours, textColours } from './../colours.js'
import { toggleDate } from './../redux/actions.js'

import DinumeroButton from './../DinumeroButton.js'

const NUM_COLUMNS = 5
const PADDING = 0

class HabitScreen extends React.Component {
  renderItem = ({ item }) => {
    if (item.date === '') {
      return <View style={styles.emptyContainer} />;
    } else {
      return (
        <View style={[styles.dateContainer, {borderColor: this.props.navigation.getParam('colour')}]}>
          <DinumeroButton 
            date={item.date} 
            isDone={item.isDone} 
            ind={item.ind}
            colour={this.props.navigation.getParam('colour')}
            habit_title={this.props.navigation.getParam('title')}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <TouchableOpacity style={{flex: 1}} onPress={()=> this.props.navigation.navigate('Main')}>
              <View style={{height: 50, width: 50, marginLeft: 10, justifyContent: 'space-evenly'}}>
                <View style={[styles.backButtonBars, {backgroundColor: this.props.navigation.getParam('colour')}]}/>
                <View style={[styles.backButtonBars, {backgroundColor: this.props.navigation.getParam('colour')}]}/>
                <View style={[styles.backButtonBars, {backgroundColor: this.props.navigation.getParam('colour')}]}/>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.titleText, {color: this.props.navigation.getParam('colour')}]}>{this.props.navigation.getParam('title')}</Text>
          </View>
          <View style={styles.rightHeader}>
          </View>
        </View>
        <FlatList
          numColumns={NUM_COLUMNS}
          horizontal={false}
          renderItem={this.renderItem}
          data={this.props.navigation.getParam("dates")}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  habits: state.habits,
});

const mapDispatchToProps = {
  toggleDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitScreen)

const styles = StyleSheet.create({
  container: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appColours.black,
  },
  dateContainer: {
    flex: 1/NUM_COLUMNS,
    height: (Dimensions.get('screen').width - 2 * PADDING) / NUM_COLUMNS,
    padding: 0,
    borderWidth: 0.6,
    borderColor: textColours.blue,
  },
  emptyContainer: {
    flex: 1,
    height: 75,
    borderWidth: 1,
    borderColor: appColours.lightGrey,
  },
  titleText : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18CAE6',
  },
  habitText : {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 80,
    paddingRight: 80,
  },
  habitButton: {
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#18CAE6',
    borderStyle: 'dashed',
  },
  headers: {
    backgroundColor: appColours.black,
    borderColor: appColours.black,
    bottomBorderWidth: 0,

  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightHeader: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  backButtonBars: {
    width: 35, 
    height: 2, 
    resizeMode: 'contain', 
  },
  btnDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOff: {
    backgroundColor: 'black',
  },
  btnOn: {
    backgroundColor: textColours.blue,
  },
  dateText: {
    color: appColours.darkGrey,
    fontWeight: 'bold',
  },
});


