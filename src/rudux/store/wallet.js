const defaultState = {
  wallets: [],
}

export const walletReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_WALLET':
      return {...state, wallets: [...state.wallets, action.payload]}
    case 'DEL_WALLET':
      return {...state, wallets: state.wallets.filter(wallet => wallet.id !== action.payload)}

    default: 
      return state
  }
}