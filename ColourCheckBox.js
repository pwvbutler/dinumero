import React from 'react'
import {StyleSheet} from 'react-native'
import { CheckBox } from 'react-native-elements'


export default class ColourCheckBox extends React.Component {
  render() {
    return (
      <CheckBox 
          title={this.props.colourTitle}
          checked={this.props.colourTitle === this.props.currentColour}
          containerStyle={styles.checkBoxContainer}
          textStyle={{
            color: this.props.colourValue,
            fontSize: 20,
          }}
          onPress={this.props.changeColour}
        />
    )
  }
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    backgroundColor: '#0C141F',
    borderWidth: 1,
    borderColor: 'grey',
    
  },
})