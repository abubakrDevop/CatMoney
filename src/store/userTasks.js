const defaultState = {
    userTasks: []
}
    
    export const userTasksReduser = (state = defaultState, action) => {
      switch (action.type) {
        case 'add_userTasks':
          return {userTasks: [action.payload]}
        default: 
          return state
      } 
    }