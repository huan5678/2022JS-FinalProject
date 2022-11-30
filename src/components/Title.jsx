import React from 'react'

export const Title = ({content, isColorWhite = false, className}) => {
  return (
    <h2 className={`text-center text-h2 ${isColorWhite ? 'text-white' : ''} ${className}`}>{content}</h2>
  )
}

export default Title;
