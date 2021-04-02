
import React from "react";

import blogData from './data.js'


function Details() {
  return (
    <div className='container-details'>
      {blogData.map((item, keydetai) => {
        <div key={keydetai}>
          <p>{item.id}</p>
          <h3>{item.title}</h3>
          <p>{item.published_date}</p>
          <p>{item.description}</p>
          <p> By {item.author}</p>
        </div>
      }
      )}

    </div>
      );
    }

export default Details;