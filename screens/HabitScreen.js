import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleDate } from './../redux/actions';
import DinumeroButton from './../DinumeroButton';
import { appColours, textColours } from './../colours';
import Constants from 'expo-constants';
const NUM_COLUMNS = 5;
const PADDING = 0;

const HabitScreen = ({ route, navigation }) => {
  const { colour, title, dates } = route.params; // ✅ FIXED: Use route.params
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    if (item.date === '') {
      return <View style={styles.emptyContainer} />;
    } else {
      return (
        <View style={[styles.dateContainer, { borderColor: colour }]}>
          <DinumeroButton 
            date={item.date} 
            isDone={item.isDone} 
            ind={item.ind}
            colour={colour}
            habit_title={title}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.navigate('Main')}>
          <View style={{ height: 50, width: 50, marginLeft: 10, justifyContent: 'space-evenly' }}>
            <View style={[styles.backButtonBars, { backgroundColor: colour }]} />
            <View style={[styles.backButtonBars, { backgroundColor: colour }]} />
            <View style={[styles.backButtonBars, { backgroundColor: colour }]} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.titleText, { color: colour }]}>{title}</Text>
      </View>

      <FlatList
        numColumns={NUM_COLUMNS}
        renderItem={renderItem}
        data={dates}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HabitScreen;

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
    flex: 1 / NUM_COLUMNS,
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18CAE6',
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  },
});
