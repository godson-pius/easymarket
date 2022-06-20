import React from 'react'

const Logout = () => {
    localStorage.removeItem('merchant')
    window.location.href = "/"
    
  return (
    <div>Logout</div>
  )
}

export default Logout