import React from 'react';
import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <header className="header">
          <h1 className="name">Vedant Sood</h1>
          <p className="job-title">GIS Developer & Data Analyst </p>
        </header>
        <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
      />
        <nav className="menu">
  <ul>
    <li>
      <a href="#summary">Summary</a>
    </li>
    <li>
      <a href="#skills">Skills</a>
    </li>
    <li>
      <a href="#technical_skills">Technical Skills</a>
    </li>
    <li>
      <a href="#experience">Experience</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/vedant-sood" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </li>
    <li>
      <a href="https://github.com/blazingvx" target="_blank" rel="noopener noreferrer">
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
