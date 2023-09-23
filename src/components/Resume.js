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
          <li>GIS Software Development (e.g., ArcGIS, QGIS)</li>
          <li>Geospatial Data Analysis</li>
          <li>Python Programming</li>
          <li>Database Management (SQL, PostgreSQL)</li>
          <li>Cartography and Map Design</li>
          <li>GeoJSON and Shapefile Manipulation</li>
          <li>Desktop GIS Application Development</li>
        </ul>
      </section>

      {/* Experience section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>GIS Desktop Developer</h3>
          <p className="company">GeoTech Solutions Inc.</p>
          <p className="date">June 2020 - Present</p>
          <ul>
            <li>Developed custom GIS desktop applications using ArcGIS API for JavaScript.</li>
            <li>Designed and implemented geospatial data visualization and analysis tools.</li>
            <li>Worked on GIS database management and optimization.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>GIS Analyst</h3>
          <p className="company">GeoData Services</p>
          <p className="date">May 2017 - May 2020</p>
          <ul>
            <li>Conducted geospatial analysis and produced thematic maps for clients.</li>
            <li>Assisted in GIS data collection and field surveys.</li>
            <li>Developed Python scripts for automating geoprocessing tasks.</li>
          </ul>
        </div>
      </section>

      {/* Contact Info section */}
      <section id="contact-info" className="section">
        <h2>Contact Info</h2>
        <p className="contact">
          <span className="info-icon">&#9742;</span> (123) 456-7890
        </p>
        <p className="contact">
          <span className="info-icon">&#9993;</span> johndoe@email.com
        </p>
        <p className="contact">
          <span className="info-icon">&#127968;</span> Anytown, USA
        </p>
      </section>
    </div>
  );
};

export default Resume;
