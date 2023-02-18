import React, {useState, useRef} from 'react';


//here i used normal variable num, react doesn't keep track of this variable.
// it tracks only state variables, so when ever there is change in the state
// the component re-renders, so when i click on normal variable 
//because of the change in the state variable, the normal variable sets to the 
//initial state(0).

//useRef value is updating when clicking but it persisits its value 
//between re-renders and updates the component when there is change in the state.
const DemouseRef = () => {
 let num = 0;
 const [count, setCount] = useState(0);
 const ref = useRef(0);
 console.log(ref.current);
  return (
    <div>
      <h2>The result from state is {count}</h2>
      <h3>The result from ref state is {ref.current}</h3>
      <button onClick={()=>ref.current= ref.current+1}>useRef state</button>
      <button onClick={()=>setCount(count+1)}>State button</button>
      <button onClick={()=>console.log(num = num +1)}>Normal variable button</button>
    </div>
  )
}

export default DemouseRef;
