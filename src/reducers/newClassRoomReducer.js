const initialState = {
  password: '',
  errorText: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ERROR':
      if(action.field === 'class password') {
        return Object.assign({}, state, {
          errorText: action.warning
        });
      }
    case 'TEXT':
      return Object.assign({}, state, {
        password: action.text
      })
    default:
      return initialState;
  }
}
