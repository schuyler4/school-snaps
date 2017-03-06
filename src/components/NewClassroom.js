import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';

class NewClassRoom extends Component {
  onPress() {
    const data = {password: this.props.newClassRoom.password};
    axios.post('http://localhost:3000/classroom/new', data)
      .then((response) => {
        this.props.changePage('classroom');
      });
  }

  onChange(text) {
    this.props.typeMessage(text, 'class password');
  }

  render() {
    return (
      <View>
        <TextInput
          style={style.input}
          placeholder="class password"
          value={this.props.newClassRoom.text}
          autoCapitalize="none"
        />
        <Button title="Start Classroom" onPress={this.onPress} />
      </View>
    );
  }
}

const style = {
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginTop: 20
  },
}

function mapStateToProps(state) {
  return {
    newClassRoom: state.newClassRoom
  }
}

export default connect(mapStateToProps, actions)(NewClassRoom);
