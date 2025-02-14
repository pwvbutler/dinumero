import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleDate } from './redux/actions';

const DinumeroButton = ({ habit_title, ind, date, isDone, colour }) => {
  const [isPressed, setIsPressed] = useState(isDone);
  const dispatch = useDispatch();

  const dateBtnPressed = () => {
    dispatch(toggleDate(habit_title, ind));
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={dateBtnPressed}
      style={[styles.btnDefault, !isPressed ? styles.btnOff : [styles.btnOn, { backgroundColor: colour }]]}
    >
      <Text style={styles.dateText}>{date}</Text>
    </TouchableOpacity>
  );
};

export default DinumeroButton;

const styles = StyleSheet.create({
  btnDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOff: {
    backgroundColor: 'black',
  },
  btnOn: {
    backgroundColor: 'blue',
  },
  dateText: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
