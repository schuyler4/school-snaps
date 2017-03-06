import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LoginForm from './LoginForm';
import Choose from './Choose';
import NewClassRoom from './NewClassroom';
import Classroom from './Classroom';

function PageContainer(props) {
  if(props.auth !== null) {
    switch (props.page) {
      case 'choose':
        return <Choose />
      case 'newClassroom':
        return <NewClassRoom />
      case 'classroom':
        return <Classroom />
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
