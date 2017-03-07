export function logIn(user) {
  return {
    type: 'LOG_IN',
    user
  }
}

export function typeMessage(text, field) {
  return {
    type: 'TEXT',
    text,
    field
  }
}

export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export function error(warning) {
  return {
    type: 'ERROR',
    warning
  }
}

export function classPassword(password) {
  return {
    type: 'CLASS_PASSWORD',
    password
  }
}

export function addTeacher(name) {
  return {
    type: 'ADD_TEACHER',
    name
  }
}
