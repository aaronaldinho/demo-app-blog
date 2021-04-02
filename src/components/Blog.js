import blogData from './data.js'

const BlogPhotos = () => {
    return ( 
        <div className="details">
      {blogData.map((item, keyword)=>(
        <div className='div-key' key={keyword}>
       
         <img src={item.img_url} alt=""/>
         <h3>{item.title}</h3>
         <button>Read more</button>
          
        </div>
      )
      )};
    </div>
     );
}
 
export default BlogPhotos;