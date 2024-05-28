import React, { useState } from 'react'

import {FaStar} from 'react-icons/fa'

import './styles.css'

function Star({noOfStars}) {

    const [rating, setRating] =useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)

    }

    function handleMouseLeave(){
        setHover(rating)

    }

    function handleClearRating(){
        setRating(0);
        setHover(0);
    }
    return (
        <div className='Star-Rating'>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1
                    return <FaStar
                    key={index}
                    className = {index <= (hover || rating) ?'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={()=> handleMouseEnter(index)}
                    onMouseLeave={()=> handleMouseLeave()}
                    size={40}
                    />

                   
                })
            }
        <button
        onClick={handleClearRating}>Clear Rating</button>
        </div>
    )
}

export default Star