import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/entry" className='link'>New Entry</Link>
          </li>
          <li>
            <Link to="/tricks" className='link'>Tricks</Link>
          </li>
          <li>
            <Link to="/progressions" className='link'>Progressions</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;