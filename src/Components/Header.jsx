import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <nav>
          <li className='nav-item'>
            <Link to="/entry" className='link' >New Entry</Link>
          </li>
          <li className='nav-item'>
            <Link to="/tricks" className='link'>Tricks</Link>
          </li>
          <li className='nav-item'>
            <Link to="/progressions" className='link'>Progressions</Link>
          </li>
          <li className='nav-item'>
            <Link to="/" className='link'>Home</Link>
          </li>
      </nav>
    </div>
  );
}

export default Header;