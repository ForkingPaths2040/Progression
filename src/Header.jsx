import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/entry">New Entry</Link>
          </li>
          <li>
            <Link to="/tricks">Tricks</Link>
          </li>
          <li>
            <Link to="/progressions">Progressions</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;