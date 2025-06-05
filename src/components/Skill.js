import React from 'react';

import './skill.css'; // This file will hold the custom styles

export default function Skill() {
  
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-code-slash fs-1 text-warning mb-3"></i>
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Expert in writing semantic, accessible HTML5.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-palette fs-1 text-info mb-3"></i>
                <h5 className="card-title">CSS</h5>
                <p className="card-text">Strong with Flexbox, Grid, media queries, and animations.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-braces fs-1 text-success mb-3"></i>
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">Experienced in DOM manipulation and ES6+ features.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-react fs-1 text-primary mb-3"></i>
                <h5 className="card-title">React</h5>
                <p className="card-text">Built SPAs using reusable components and hooks.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-file-code fs-1 text-secondary mb-3"></i>
                <h5 className="card-title">PHP</h5>
                <p className="card-text">Back-end logic with form handling and server-side scripts.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center skill-card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-database fs-1 text-dark mb-3"></i>
                <h5 className="card-title">MySQL</h5>
                <p className="card-text">Skilled in writing complex queries and designing schemas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
