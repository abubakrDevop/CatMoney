
const defaultState = {
  pages: 1,
}

export const pagesReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'Next_Page':
      return {...state, pages: state.pages + action.payload}
    case 'Prev_Page':
      return {
        ...state, pages: state.pages - action.payload}
    default: 
      return state
  }
} 
