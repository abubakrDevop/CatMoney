import { combineReducers, createStore } from 'redux'
import { pagesReduser } from './pages'
import { userDataReduser } from './userData'
import { userTasksReduser } from './userTasks'

const rootRedusers = combineReducers({
  pages: pagesReduser,
  userData: userDataReduser,
  userTasks: userTasksReduser,
}) 

export const store = createStore(rootRedusers)
