
import React from "react";

import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <Link to='/'>
      <h3>My Life</h3>
      </Link>
        <ul className="ul-nav">
          <Link className='' to='/blogphotos'>
          <li>Blog</li>
          </Link>
          <Link to='/details'>
          <li>Details</li>
          </Link>
          <Link to='/contact'>
          <li>Contact</li>
          </Link>
    </ul>
    </nav>

  );
}

export default Nav;


