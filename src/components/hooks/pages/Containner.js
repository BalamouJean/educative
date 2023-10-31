import React, { useContext } from 'react'
import { Theme } from '../App'

export default function Containner(props) {
  const theme = useContext(Theme)
  const style = {
    light: 'white',
    black: 'black'
  }

  return (
    <div style={{height: '10em', background: theme==='light'? style.light : style.black }}>
        {props.children}
    </div>
  )
}
