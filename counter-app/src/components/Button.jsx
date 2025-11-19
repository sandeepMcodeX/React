import React from 'react'
export const Button = ({ btnClass = "" , type="" ,content="click", onClick}) => {
  return (
    <button className={`btn ${btnClass}`}  onClick={onClick}>
      {content}
    </button>
  )
}

