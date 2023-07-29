import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = ({goToLayer}) => {
  return (
    <nav>
      <div className="left-buttons">
        <button onClick={() => goToLayer(0)}className="accent">//home</button>
      </div>
      <div className="right-buttons">
        <button onClick={() => goToLayer(1)} className="normal">//about me</button>
        <button onClick={() => goToLayer(2)}className="normal">//resume</button>
        <button onClick={() => goToLayer(3)}className="normal">//contact</button>
        <button className="icon">
          <a href="https://github.com/Jaidenmagnan">
            <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
          </a>
        </button>
        <button className="icon">
            <a href="https://linkedin.com/in/jaiden-magnan-611a4018a">
              <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
            </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
