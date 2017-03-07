import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

import * as actions from '../actions';
import LoginForm from './LoginForm';
import Choose from './Choose';
import NewClassRoom from './NewClassroom';
import Classroom from './Classroom';

function PageContainer(props) {
  console.log('page container loaded');

  AsyncStorage.getItem('auth').then((value) => {
    if(value !== null) {
      const { logIn, changePage } = props;
      logIn('auth')
      if(props.page === 'login') {
        changePage('choose');
      }
    }
  }).done();

  if(props.auth !== null) {
    switch (props.page) {
      case 'choose':
        return <Choose />;
      case 'newClassroom':
        return <NewClassRoom />;
      case 'classroom':
        console.log('rendering the classroom');
        return <Classroom />;
      default:
        return <LoginForm />;
    }
  }

  return <LoginForm />;
}

function mapStateToProps(state) {
  return {
    page: state.page,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(PageContainer);
