import { combineReducers, createStore } from 'redux'
import { pagesReduser } from './pages'

const rootRedusers = combineReducers({
  pages: pagesReduser
}) 

export const store = createStore(rootRedusers)
