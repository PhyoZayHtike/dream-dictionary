import React from 'react'

function Error({error}) {
  return (
    <div style={{height:"72vh"}} className="d-flex justify-content-center align-items-center">
      <h1 className="ms-2">{error}</h1>
    </div>
  )
}

export default Error