import React, { useState } from 'react';
import {FaStar} from "react-icons/fa"
const StartRating = () => {
    const [rating,setRating]=useState(null);
  const[hover,setHover]=useState(null);
    return ( 
        <div>
{
    [...Array(5)].map((star,i)=>{
        const ratingValue=i+1;
        return(
            <label>
                <input type="radio"
                name="raiting"
                value={ratingValue}
                onClick={()=>setRating(ratingValue)}
              
             
             />
                <FaStar size={50}
                  onMouseEnter={()=>setHover(ratingValue)}
                  onMouseLeave={()=>setHover(null)}
                 color={ratingValue<=(hover||rating)?"#FFC300":"#D5D8DC"}/>
            </label>
        )
    })
}
        </div>
     );
}
 
export default StartRating;