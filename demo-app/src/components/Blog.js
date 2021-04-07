import blogData from './data.js'

import React from 'react';


const BlogPhotos = () => {
    return (
      <div className='blog-details'>
          {blogData.map((index, datei)=>(
            <div className='div-key' key={datei}>
              <div >
                <img className='img-blog' src={index.img_url} alt=""/>
                  <div className='info-box'>
                    <h3>{index.title}</h3>
                    <button onClick='/details/' className='button-order'>Read More</button>
                  </div>
              </div>
            </div>
          )
          )}
      </div>
          )
          }
export default BlogPhotos;