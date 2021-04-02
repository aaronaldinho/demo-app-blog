
import React from "react";

import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <h3>My Life</h3>
        <ul className="nav">
          <Link to='/blogphotos'>
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


