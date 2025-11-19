import React, { useState } from 'react';
import { Button } from './Button';
import { IncrementAndDecrement } from './IncrementAndDecrement';
import { PlusMinusButton } from './PlusMinusButton';

export const ContentContainer = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [error, setError] = useState('');

  function resetButton() {
    setCount(0);
    setValue(1);
    setError("");
   }
  return (
    <div className="border-3 w-[400px] min-h-[350px] rounded-xl bg-[#232329] flex  items-center flex-col gap-7  font-poppins pt-2 pb-5">
      <h1 className="text-4xl font-semibold mt-5">Counter app</h1>
      <p className="text-5xl">{count}</p>
      <PlusMinusButton
        count={count}
        setCount={setCount}
        value={value} 
        setError={setError}
      />
      {/* Error Message */}
      {error && <p className="text-red-600 text-md ">{error}</p>}
      {/* Increment And Decrement */}
      <IncrementAndDecrement value={value} setValue={setValue} />
      {/* Button */}
      <Button onClick={resetButton} btnClass="reset-btn" content="Reset" />
    </div>
  );
}
