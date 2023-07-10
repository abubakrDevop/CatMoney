const defaultState = {
    userTasks: []
}
    
    export const userTasksReducer = (state = defaultState, action) => {
      switch (action.type) {
        case 'add_userTasks':
          return {userTasks: [action.payload]}
        default: 
          return state
      } 
    }