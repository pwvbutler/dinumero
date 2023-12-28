import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { textColours, appColours } from './colours.js'
import { connect } from 'react-redux'
import { toggleDate } from './redux/actions.js'

class DinumeroButton extends React.Component {
  state = {
    isPressed: this.props.isDone
  }

  dateBtnPressed = () => {
    this.props.toggleDate(this.props.habit_title, this.props.ind)
    this.setState(prevState => ({isPressed: !prevState.isPressed}))
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.dateBtnPressed}
        style={[styles.btnDefault, (!this.state.isPressed ? styles.btnOff : [styles.btnOn, {backgroundColor: this.props.colour}])]}
      >
        <Text style={styles.dateText}>{this.props.date}</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = {
  toggleDate,
}

export default connect(null, mapDispatchToProps)(DinumeroButton)

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
    backgroundColor: textColours.blue,
  },
  dateText: {
    color: appColours.darkGrey,
    fontWeight: 'bold',
  }
});
