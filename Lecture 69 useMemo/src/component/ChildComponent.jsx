import React, { memo } from 'react'

const ChildComponent = memo(({printHello}) => {
  return <div>ChildComponent
    <button onClick={printHello}>Print Hello</button>
  </div>
})

export default ChildComponent