import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	wallets: []
}

export const walletSlice = createSlice({
	name: 'walletSlice',
	initialState,
	reducers: {
		addWallet: (state, action) => {
			state.wallets.push(action.payload)
		},
		removeWallet: (state, action) => {
			state.wallets = state.wallets.filter(wallet => wallet.id !== action.payload)
		}
	}
})

export const {addWallet, removeWallet} = walletSlice.actions

export default walletSlice.reducer
