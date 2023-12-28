import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import ColourCheckBox from './ColourCheckBox.js'



export default class SrollViewList extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.coloursContainer} scrollEnabled={false}>
          {this.props.coloursArray.map((value, index) => (
            <ColourCheckBox 
              colourTitle={value.title} 
              colourValue={value.value} 
              currentColour={this.props.currentColour} 
              changeColour={this.props.onSelectColour(value)} />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  coloursContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
})