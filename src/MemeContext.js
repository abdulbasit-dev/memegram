import React, {useReducer, createContext} from 'react'

export const ACTIONS = {
  ADD_MEME: 'add-meme',
  SELECTED_IMG: 'selected-img',
  UNSELECTED_IMG: 'unselected-img',
}

const initialState = {
  memes: [],
  user: null,
  selectedImg: '',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_MEME:
      return {...state}
    case ACTIONS.SELECTED_IMG:
      return {...state, selectedImg: action.meme}
    case ACTIONS.UNSELECTED_IMG:
      return {...state, selectedImg: action.meme}
    default:
      return state
  }
}

export const MemeContext = createContext()

function MemeProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <MemeContext.Provider value={[state, dispatch]}>{props.children}</MemeContext.Provider>
}

export default MemeProvider
