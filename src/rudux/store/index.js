import { combineReducers, createStore } from 'redux'
import { addProfile } from '../../rudux/store/addProfile'
import { wallet } from '../../rudux/store/wallet'

const rootRedusers = combineReducers({
  inputData: addProfile, 
  wallets: wallet,
}) 

export const store = createStore(rootRedusers)