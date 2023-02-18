import React from 'react';
import Child from './Child';

const Parent = () => {
    const count =5;
  return (
    <div>
      Parent
      <Child count={count}/>
    </div>
  )
}

export default Parent
