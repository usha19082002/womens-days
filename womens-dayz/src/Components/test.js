import React, { useState } from 'react';

const Test = () => {
  const [status, setStatus] = useState(false);

  const updateState = () => {
    setStatus(true);
  }
  
  return (
    <>
      <button onClick={updateState} className='btn btn-danger'>click</button>
      <h1>
        {
          status ? 'hiii' : 'byeee'
        }
      </h1>
    </>
  );
}

export default Test;
