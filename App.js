import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
// ref: https://github.com/react-native-community/react-native-segmented-control/blob/master/example/App.js

export default class App extends React.Component {

  // the initial state
  state = {
    segmentedControl: {
      values: ['Movies', 'TV Shows'],
      value: 'Unselected',
      selectedIndex: undefined,
    }
  };

  // onChange method
  _onChange = event => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
    console.log(`${this.state.selectedIndex}`)
  };

   // onValueChange method
  _onValueChange = value => {
    this.setState({
      value: value,
    });
    console.log(`${this.state.value}`)
  };

  // screen (UI)
  render() {
    return (
      <View style={{marginTop: 80}}>
          <View style={{marginBottom: 25}}>
            <SegmentedControlIOS values={['Movies', 'TV Shows']} 
                                 selectedIndex={0} 
                                 onChange={this._onChange}
                                 onValueChange={this._onValueChange}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});