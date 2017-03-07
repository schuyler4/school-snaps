import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';

class NewClassRoom extends Component {
  constructor() {
    super()
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('component mounted');
  }

  onPress() {
    const { changePage, classPassword, addTeacher } = this.props;
    const password = this.props.newClassRoom.password;

    axios.get(`http://localhost:3000/classroom/${password}`)
    .then((response) => {
      if(response.data === null) {
        const data = {
          password: this.props.newClassRoom.password,
          teacher: this.props.auth.username
        };
        axios.post('http://localhost:3000/classroom/new', data)
        .then((response) => {
          //addTeacher(this.props.auth.username);
          //classPassword(this.props.newClassRoom.password);
          console.log('changing the page');
          changePage('classroom');
        })
        .catch((error) => {
          this.props.error('there was an error createing a classrooom');
        });
      }
    }).catch((error) => {
      this.props.error('there was an error createing a classrooom');
    });
  }

  onChange(text) {
    this.props.typeMessage(text, 'class password');
  }

  render() {
    const { input, errorText } = style;

    return (
      <View>
        <TextInput
          style={input}
          placeholder="class password"
          value={this.props.newClassRoom.password}
          autoCapitalize="none"
          onChangeText={this.onChange}
        />
        <Button title="Start Classroom" onPress={this.onPress} />
        <Text style={errorText}> {this.props.newClassRoom.errorText} </Text>
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
  errorText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  }
}

function mapStateToProps(state) {
  return {
    newClassRoom: state.newClassRoom,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(NewClassRoom);
