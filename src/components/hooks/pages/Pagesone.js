import React, { useContext, useRef } from 'react'
import { Theme, GlobalState } from '../App'
import { Button } from '@radix-ui/themes'



export default function Pagesone(props) {
    const val = useContext(Theme)
    const [global_state, dispatch] = useContext(GlobalState)
    const ref = useRef(null)


  return (
    <div ref={ref} style={{height: '100vh'}}>
      page one {val}

      <p>{global_state.theme}</p>
      <p>{global_state.count}</p>
      <p>{global_state.content.text}</p>

      <button onClick={() => dispatch({type: 'CHANGE_THEME', theme: 'black'})}>change theme</button>
      <button onClick={() => dispatch({type: 'COUNT_INCREMENT'})}>count increment</button>
      <button onClick={() => dispatch({type: 'SET_CONTENT'})}>set content</button>
      <select
      onChange={(event) => props.changeTheme(event.target.value)}
      >select Theme
        <option>Theme 1</option>
        <option>Theme 2</option>
        <option>Theme 3</option>
      </select>
      <Button>
        Bookmark
      </Button>
     </div>
  )
}
