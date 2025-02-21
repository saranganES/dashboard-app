import React, { useState } from 'react'
import CallBack from '../components/CallBack'
import Memo from '@/components/Memo'

export default function Test() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <h1>useCallback Example</h1>
      <CallBack />

      <h2>React Memo Example</h2>

      <button onClick={() => setClicked(!clicked)}>Click me</button>
      <Memo />
    </div>
  )
}
