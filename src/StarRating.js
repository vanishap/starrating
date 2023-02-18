import React from 'react';
import Star from './Star';

const StarRating = (props) => {
 const count = 5;
 const stars = Array.from(new Array(count));
  return (
    <>
      {stars.map((star,index)=>{
        return <Star opted= {index<props? true: false}/>
      })}
    </>
  )
}

export default StarRating
