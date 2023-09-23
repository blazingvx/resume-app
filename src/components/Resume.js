import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Menu bar */}
      {/* ... (No changes to the existing styles) */}
      
      {/* Summary section */}
      <section id="summary" className="section">
        <h2>Summary</h2>
        <p>
          Experienced GIS Desktop Developer with a strong background in
          geospatial technologies. Skilled in GIS software development,
          spatial analysis, and cartography. Passionate about creating
          innovative solutions for geographic data visualization and analysis.
        </p>
      </section>

      {/* Skills section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Data Structures</li>
          <li>Geo-spatial Technology</li>
          <li>Software Methodology</li>
          <li>Algorithms Analysis</li>
          <li>Database Management</li>
          <li>Artificial Intelligence</li>
          <li>Systems Programming</li>
          <li>Computer Architecture</li>
        </ul>
      </section>

      <section id="technical_skills" className="section">
      <h2>Technical Skills</h2>
      <ul>
          <li>Languages: Java, Python, C#, C, HTML/CSS, JavaScript, SQL, Bat</li>
          <li>Developer Tools: Visual Studio, VS Code, Google Cloud Platform, Android Studio</li>
          <li>Technologies/Frameworks: Spring Boot, Linux, Jenkins, GitHub, ArcGIS Desktop/Server, ArcFM Desktop, Geo-database Manager, MS VISIO</li>
        </ul>
      </section>
      {/* Experience section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
        <p className="company"><h3>Tata Consultancy Services - Information Technology Analyst (ITA)</h3></p>
          <br/>
          <ul>
            <li>Led migration of various software solutions to cloud platforms.</li>
            <li>Managed complex database migrations.</li>
            <li>Designed and improved workflows for enhanced efficiency.</li>
            <li>Implemented robust security measures during code migration.</li>
            <li>Developed utilities for seamless interaction between software interfaces.</li>
            <li>Engineered middleware for third-party integrations.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="experience-item">
        <p className="company"><h3>Software Transformation and Enhancement</h3></p> 
        <br/> 
          <ul>
            <li>Upgraded and modernized legacy software applications.</li>
            <li>Developed APIs for efficient change tracking.</li>
            <li>Managed project tasks and backlog efficiently.</li>
            <li>Designed user-friendly interfaces for diverse software solutions.</li>
            <li>Worked on server-side development and optimized services.</li>
            <li>Effectively handled database operations and performance tuning.</li>
          </ul>
        </div>
      </section>
      {/* Contact Info section */}
      <section id="contact-info" className="section">
        <h2>Contact Info</h2>
        <p className="contact">
          <span className="info-icon">&#9993;</span> vedantsood@gmail.com
        </p>
        <p className="contact">
          <span className="info-icon">&#127968;</span> New Delhi, India
        </p>
      </section>
    </div>
  );
};

export default Resume;
