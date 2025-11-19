import React from 'react'
import { Button } from './Button';

export const PlusMinusButton = ({ count, setCount, value, setError }) => {
  function minusButton() {
    if (count - value >= 0) {
       setCount(count-value)
    }
    else {
      setError("Cannot go below zero");
    }
    
   }

  function plusButton() {
    setCount(count + value);
    setError("");
}
  return (
    <div className='flex gap-20'>
      <Button onClick={minusButton} btnClass='minus-btn'  content="-"/>
      <Button onClick={plusButton} btnClass='plus-btn' content="+"/> 
    </div>
  )
}
