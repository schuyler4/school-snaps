const initialState = {
  username: '',
  password: '',
  errorText: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'TEXT':
      if (action.field === 'username') {
        return Object.assign({}, state, {
          username: action.text,
        });
      } else if (action.field === 'password') {
        return Object.assign({}, state, {
          password: action.text,
        });
      }
    case 'ERROR':
      return Object.assign({}, state, {
        errorText: action.warning
      })
    default:
      return state;
  }
}
