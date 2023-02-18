const defaultState = {
    inputData: [],
}

export const cashReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, inputData: [...state.inputData, action.payload]}
    case 'DEl_USER':
      return {...state, inputData: state.inputData.filter(inputData => inputData.id !== action.payload)}
    default: 
      return state
  }
}