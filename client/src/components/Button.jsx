import React from 'react'

const Button = ({children,type="submit",handleClick}) => {
  return <button type={type} onClick={handleClick}>{children}</button>
}

export default React.memo(Button)