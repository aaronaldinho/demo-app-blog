
import React from "react";

import blogData from './data.js'
import Photo from './photo-1548016338-b00b4aa6a004 (1).jpeg'

const Details = () => {
  return (
    <div className='details-container'>
        {blogData.map((id)=> (
        <button>back</button>,
          <img className='img-details' src={Photo} alt=""/>,
        <div className='div-title-date'>
          {id.title}
          {id.published_date}
        </div>,
        <div className='div-lorem-author'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem explicabo hic, dolorum accusamus cupiditate temporibus labore odit nostrum, eos cumque harum placeat voluptas perspiciatis unde quae nesciunt culpa assumenda.</p>
          {id.author}
        </div>
        )
        )}
    </div>
      )
      }
    
export default Details;

