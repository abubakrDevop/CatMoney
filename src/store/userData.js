const defaultState = {
  userData: {
      balance: '0',
      login: '',
      email: '',
      walletName: '',
    },
}
  
  export const userDataReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'add_userData':
        return {userData: action.payload}
      case 'add_userTasks':
        return {userTasks: action.payload}
      default: 
        return state
    } 
  } 