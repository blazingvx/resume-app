import React from 'react';
import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <header className="header">
          <h1 className="name">John Doe</h1>
          <p className="job-title">GIS Desktop Developer</p>
        </header>

        <nav className="menu">
          <ul>
            <li>
              <a href="#summary">Summary</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact-info">Contact</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main">
        <Resume />
      </main>
    </div>
  );
}

export default App;
