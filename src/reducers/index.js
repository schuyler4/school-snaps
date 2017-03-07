import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import pageReducer from './pageReducer';
import newClassRoomReducer from './newClassRoomReducer';
import classroomReducer from './classroomReducer';

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  page: pageReducer,
  newClassRoom: newClassRoomReducer,
  classroom: classroomReducer
});
