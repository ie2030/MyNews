import React from 'react';
import Link from 'react-router/Link';

const Navigation = () => {
    return (
      <div className="Navigation">
        <ul className = "nav_list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
}

export default Navigation;