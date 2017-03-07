import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Classroom extends Component {
  render() {
    console.log(this.props.classroom);
    const { classPassword } = this.props.classroom;
    return (
      <View>
        <Text>{classPassword}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state.classroom);
  return {
    classroom: state.classroom
  }
}

export default connect(mapStateToProps, actions)(Classroom);
