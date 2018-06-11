import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light header">
        <div class="collapse navbar-collapse" id="navbarNav">
          <h4 className="h4header">BIT BLOG</h4>
        </div>
        <div className="right">
          <ul class="navbar-nav right">
            <li class="nav-item right">
              <a class="nav-link hidden right" href="#">
                Home
              </a>
            </li>
            <li class="nav-item" />
            <li class="nav-item headerAuthors">

              <Link class="nav-link hidden" to="/Authors">Authors</Link>
            </li>

            <li class="nav-item headerAbout">
              <Link class="nav-link hidden" to="/About">About</Link>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
