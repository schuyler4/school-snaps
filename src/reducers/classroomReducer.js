const initialState = {
  classPassword: '',
  teacher: '',
  students: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'CLASS_PASSWORD':
      return Object.assign({}, state, {
        classPassword: action.classPassword
      });
    case 'ADD_TEACHER':
      return {
        ...state,
        teacher: action.name
      }
    default:
      return initialState
  }
}
