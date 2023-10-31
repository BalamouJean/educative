import React from 'react'
import { useState, createContext, useReducer } from 'react'
import Containner from './pages/Containner'
import Pagesone from './pages/Pagesone'

export const Theme = createContext('light')
export const GlobalState = createContext([])
const initialstate = {
  theme: 'light',
  count: 0,
  content: {}
}

const reducer = (state, action) =>{
  switch(action.type){
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme
      }
    case 'COUNT_INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'SET_CONTENT':
        return {
          ...state,
          content: {text: 'hire is global content'}
        }
    default:
      return state
  }
}



export default function App() {

  const [ count, setCount ] = useState(0)
  const [myTheme, setMyTheme] = useState('light')
  const [state, dispatch] = useReducer(reducer, initialstate)

  const changeTheme = (val)=>{
    setMyTheme(val)
  }
  


  return (
    <Theme.Provider value={myTheme}>
      <GlobalState.Provider value={[state, dispatch]}>
        <Containner>
        
            <Pagesone changeTheme={changeTheme}/>
                <div style={{height: '100vh', background: 'red'}}>
            </div>
          
        </Containner>
       </GlobalState.Provider>
    </Theme.Provider>
  )
}
