import { profileAPI } from '../dal/api'

const ADD_USER_DATA = 'userData/add_userData'// userData/ + action name = redux-dux
const ADD_USER_TASKS = 'userData/add_userTasks'

const defaultState = {
  userData: {
    balance: '0',
    login: '',
    email: '',
    walletName: '',
    registerError: '',
    authError: ''
  },
}

export const userDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return { ...state, userData: { ...state.userData, ...action.payload } }
    case ADD_USER_TASKS:
      return { ...state, userTasks: action.payload }
    default:
      return state
  }
}

//AC
const setUserRegData = data => ({ type: ADD_USER_DATA, payload: { login: data.login, email: data.email } })
const setUserAuthData = data => ({ type: ADD_USER_DATA, payload: { login: data.login } })
const setRegError = errorMessage => ({ type: ADD_USER_DATA, payload: { registerError: errorMessage } })
const setAutError = errorMessage => ({ type: ADD_USER_DATA, payload: { authError: errorMessage } })

//thunks
export const registerUser = (data) => (dispatch) => {
  profileAPI.register(data)
    .then(() => {
      localStorage.setItem('registered', 'ok');
      dispatch(setUserRegData(data));
    })
    .catch(error => {
      const errorMessage = error.response ? error.response.data.error : '';
      dispatch(setRegError(errorMessage));
    })
}

export const authUser = (data) => (dispatch) => {
  profileAPI.auth(data)
    .then(() => {
      localStorage.setItem('registered', 'ok');
      dispatch(setUserAuthData(data));
    })
    .catch(error => {
      const errorMessage = error.response ? error.response.data.error : '';
      dispatch(setAutError(errorMessage));
    })
}

