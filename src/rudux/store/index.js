import { combineReducers, createStore } from 'redux'
import { userReduser } from './addProfile'
import { walletReduser } from './wallet'

const rootRedusers = combineReducers({
  inputData: userReduser, 
  wallets: walletReduser,
}) 

export const store = createStore(rootRedusers)