import React from 'react'

function MemoSample() {
    console.log("Render1")
  return (
    <div>
        Component
    </div>
  )
}

export default React.memo(MemoSample)