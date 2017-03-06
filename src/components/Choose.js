import React from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';

import * as actions from '../actions';

function Choose(props) {
  return (
    <View style={style}>
      <Button
        title="Start A Classroom"
        onPress={() => props.changePage('newClassroom')} />
      <Button title="Join A Classroom" onPress={() => console.log('pana')} />
    </View>
  );
}

const style = {
  paddingTop: 30
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, actions)(Choose);
