import React from 'react'
export const IncrementAndDecrement = ({setValue , value}) => {
  function handleInput(e) {
    const inputValue = e.target.value;
    if (inputValue == '') {
      setValue("");
    }
    else {
      setValue(Number(inputValue));
    }
  }
  return (
    <div className='flex items- gap-2 items-center justify-between'>
      <p className='text-lg font-medium'>Increment / Decrement</p> 
      <input type="number" className='bg-white max-w-15 p-1 rounded-sm text-black ' value={value} onChange={handleInput} min={1} step={1}
         ></input> 
    </div>
  )
}
