import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const ColourCheckBox = ({ colourTitle, currentColour, colourValue, changeColour }) => {
  return (
    <CheckBox
      title={colourTitle}
      checked={colourTitle === currentColour}
      containerStyle={styles.checkBoxContainer}
      textStyle={{ color: colourValue, fontSize: 20 }}
      onPress={changeColour}
    />
  );
};

export default ColourCheckBox;

const styles = StyleSheet.create({
  checkBoxContainer: {
    backgroundColor: '#0C141F',
    borderWidth: 1,
    borderColor: 'grey',
  },
});
