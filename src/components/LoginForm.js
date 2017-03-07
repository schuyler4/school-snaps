import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, TextInput, Button, Text, AsyncStorage } from 'react-native';
import axios from 'axios';

import * as actions from '../actions';

class LoginForm extends Component {
  constructor() {
    super()
    this.signUpPressed = this.signUpPressed.bind(this);
    this.loginPressed = this.loginPressed.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
  }

  setAuth(username, password) {
    console.log('setting auth')
    const data = JSON.stringify({username, password});
    console.log('got data');
    AsyncStorage.setItem('auth', data);
  }

  signUpPressed() {
    this.setAuth();
    const { username, password } = this.props.login;
    const { logIn, changePage, error } = this.props;

    axios.get(`http://localhost:3000/user/${username}/${password}`)
    .then((response) => {
      if(response.data === null) {
        axios.post('http://localhost:3000/users/new', { username, password })
        .then((response) => {
          this.setAuth(username, password);
          logIn({ username, password });
          changePage('choose');
        })
        .catch((error) => {
          error('there was an error signing in');
        });
      } else {
        error('that username or password is already taken');
      }
    });
  }

  loginPressed() {
    const { username, password } = this.props.login;
    const { logIn, changePage, error } = this.props;

    axios.get(`http://localhost:3000/user/${username}/${password}`)
    .then((response) => {
      if(response.data !== null) {
        this.setAuth(username, password);
        logIn({username, password});
        changePage('choose');
      } else {
        error('your username or password was incorect');
      }
    })
    .catch((error) => {
      error('there was an error signing in');
    });
  }

  usernameOnChange(text) {
    this.props.typeMessage(text, 'username');
  }

  passwordOnChange(text) {
    this.props.typeMessage(text, 'password');
  }

  render() {
    const { view, input, errorText } = style

    return (
      <View style={view}>
        <TextInput
          style={input}
          placeholder="username"
          value={this.props.login.username}
          onChangeText={this.usernameOnChange}
          autoCorrect={false}
          autoCapitalize="none" />
         <TextInput style={style.input}
          placeholder="password"
          value={this.props.login.password}
          onChangeText={this.passwordOnChange}
          autoCorrect={false}
          autoCapitalize="none" />
        <Button title="Sign Up" onPress={this.signUpPressed} />
        <Button title="Login" onPress={this.loginPressed} />
        <Text style={errorText}>{this.props.login.errorText}</Text>
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
    auth: state.auth,
    login: state.login
  }
}

export default connect(mapStateToProps, actions)(LoginForm);
