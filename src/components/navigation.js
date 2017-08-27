
import React from 'react';
import Link from 'react-router/Link';

const Navigation = () => {
    return (
      <div className="Navigation">
      	<img className="logo" src="assets/img/logo.gif"/>
        <ul className = "nav_list">
          <li><Link to="/"><span className="glyphicon glyphicon-home"></span>Home</Link></li>
          <li><Link to="/about"><span className="glyphicon glyphicon-user" ></span>About</Link></li>
          <li><Link to="/contact"><span className="glyphicon glyphicon-envelope"></span>Contact</Link></li>
        </ul>
      </div>
    );
}

export default Navigation;

