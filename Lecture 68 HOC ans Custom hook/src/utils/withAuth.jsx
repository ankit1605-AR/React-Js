import React from 'react'

function withAuth(Componenet) {
  return function (props) {
    let isLogin = true;
    if (isLogin) {
      return <Componenet {...props}/>
    }
    return <p>Please login then access</p>
  }
}

export default withAuth