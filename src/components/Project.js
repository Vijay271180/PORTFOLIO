import React from 'react'
import './Project.css';
export default function Project() {
  return (
    <div>
      <section id="projects" className="container py-5">
  <h2 className="mb-4 text-center">My Projects</h2>
  
  <div className="row g-4">
   
    <div className="col-md-6 col-lg-4">
      <div className="project-card bg-white p-3">
        <img src="cafe.jpeg" alt="Project 1" className="project-img rounded"/>
        <h5 className="mt-3">CYBER CAFE MANAGEMENT SYSTEM.</h5>
        <p>A cyber cafe magement system resposive project develop in servlet jsp.</p>
        <div className="project-buttons">
          <a href="/" className="btn btn-primary btn-sm" target="_blank">View Demo</a>
          <a href="/" className="btn btn-outline-secondary btn-sm" target="_blank">Source Code</a>
        </div>
      </div>
    </div>

   
    <div className="col-md-6 col-lg-4">
      <div className="project-card bg-white p-3">
        <img src="cattle.jpeg" alt="Project 2" className="project-img rounded"/>
        <h5 className="mt-3">CATTLE MANAGEMENT SYSTEM.</h5>
        <p>A cattle mangement system project develop in php for maintain farm record.</p>
        <div className="project-buttons">
          <a href="/" className="btn btn-primary btn-sm" target="_blank">View Demo</a>
          <a href="/" className="btn btn-outline-secondary btn-sm" target="_blank">Source Code</a>
        </div>
      </div>
    </div>

 
    <div className="col-md-6 col-lg-4">
      <div className="project-card bg-white p-3">
        <img src="student.jpeg" className="project-img rounded"/>
        <h5 className="mt-3">STUDENT MANAGEMENT SYSTEM.</h5>
        <p>A student management system project develop in python using django framework.</p>
        <div className="project-buttons">
          <a href="/" className="btn btn-primary btn-sm" target="_blank">View Demo</a>
          <a href="/" className="btn btn-outline-secondary btn-sm" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
    


  </div>
</section>
    </div>
  )
}
