import React, {useReducer, createContext} from 'react'

export const ACTIONS = {
  ADD_MEME: 'add-meme',
}

const initialState = {
  memes: [],
  user: null,
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_MEME:
      return {...state}
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
