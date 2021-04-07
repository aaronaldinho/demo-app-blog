
import React from "react";


function Contact() {
  return (

    <div className="contact2">
      <div className='info-contact2'>
      <h1>Contact</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam, non ratione facere esse iusto architecto! Ipsam sit quis modi maiores. Enim facilis, impedit amet ex sed esse temporibus doloremque.</p>
      </div>
      <form className='form-new' action="">
        <input type="text" placeholder='Name' name="" id=""/>
        <input type="text"  placeholder='Email'  name="" id=""/>
        <input type="text"  placeholder='Phone' name="" id=""/>
        <textarea name=""  placeholder='Message'  id="" cols="30" rows="10"></textarea>
        <button className='button-border'>Send Message</button>
      </form>
     
    </div>
  );
}

export default Contact;


