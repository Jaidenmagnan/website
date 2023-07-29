import React from 'react';
import './Resume.css'


const Resume = () => {
  return (
    <div className="resume">
        <div className="skills">
        <h2 className="subheader">Main Skills</h2>
        <ul className="skills">
            <li>Frontend, UX/UI</li>
            <li>Javascript, CSS, HTML, React, Django, SQL</li>
            <li> C++, Rust, Python</li>
            <li>Visual Studio Code, Vim, Linux, MacOS, Windows</li>
            <li>Figma, Inventor</li>
        </ul>
        </div>
        <div className="Experience">
            <h2 className="subheader">Experience</h2>
            <ul className="projects">
                <li>
                    <h3 className="secondary">Software Engineering Intern</h3>
                    <p className="describe">@ DBS Bank</p>
                    <p className="describe">2023</p>
                </li>
                <li>
                    <h3 className="secondary">Teachers Assistant</h3>
                    <p className="describe">@ UFL, Advanced Programming Fundamentals</p>
                    <p className="describe">2023</p>
                </li>
                <li>
                    <h3 className="secondary">Research Assistant</h3>
                    <p className="describe">@ Virtual Learning Lab</p>
                    <p className="describe">2023</p>
                </li>
            </ul>
            <div className="Education">
                <h3 className="subheader">Education</h3>
                <h3 className="secondary">@ The University of Florida</h3>
                <p className="describe">Bachelors Degree in Computer Engineer</p>
                <p className="describe">GPA: 3.91</p>
                <p className="describe">Expected Graduation: 2026</p>
            </div>
            <div className="Projects">
                <h3 className="subheader">Projects</h3>
                <ul className="projects">
                    <li>
                        <h3 className="secondary">3D Graph Algorithms</h3>
                        <p className="describe">@ UFL</p>
                        <p className="describe">2023</p>
                    </li>

                    <li>
                        <h3 className="secondary">Minesweeper</h3>
                        <p className="describe">@ UFL</p>
                        <p className="describe">2023</p>
                    </li>

                </ul>
            </div>
        </div>
    </div>

  );
};

export default Resume;