import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/álbumes">Álbumes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
