import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ColourCheckBox from './ColourCheckBox';

const ScrollViewList = ({ coloursArray, currentColour, onSelectColour }) => {
  return (
    <View>
      <ScrollView style={styles.coloursContainer} scrollEnabled={false}>
        {coloursArray.map((value) => (
          <ColourCheckBox
            key={value.title}
            colourTitle={value.title}
            colourValue={value.value}
            currentColour={currentColour}
            changeColour={() => onSelectColour(value)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewList;

const styles = StyleSheet.create({
  coloursContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
