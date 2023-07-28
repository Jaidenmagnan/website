import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <div className="left-buttons">
        <button className="accent">//home</button>
      </div>
      <div className="right-buttons">
        <button className="normal">//resume</button>
        <button className="normal">//skills</button>
        <button className="normal">//projects</button>
        <button className="icon">
            <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
        </button>
        <button className="icon">
            <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
