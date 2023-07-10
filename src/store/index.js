import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { pagesReducer } from './pages'
import { userDataReducer } from './userData'
import { userTasksReducer } from './userTasks'

const rootReducer = combineReducers({
  pages: pagesReducer,
  userData: userDataReducer,
  userTasks: userTasksReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
