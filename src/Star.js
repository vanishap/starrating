import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';


const Star = (props) => {
    const [selected, setSelected] = useState(false); 
  return (
    <div>
        <FaStar count={props.count}
        style={{color:selected? 'red': 'black'}}
        onClick={()=>setSelected(!selected)}/>
    </div>
  )
}

export default Star;
