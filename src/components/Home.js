import React from 'react'
import './Home.css';

export default function Home() {
  return (
    <div>
        {/* <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/">Vijay</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>  */}


  <section className="hero container">
    <div className="hero-text">
      <h1>Hi, I’m Vijay —<br />Web Developer</h1>
      <p>Crafting beautiful web experiences</p>
      <a href="vijay.pdf" download className="btn btn-custom mt-3">Download Resume</a>
        
    </div>
    <div className="hero-img">
      <img src="kt.jpg" width="430px" height="45px" alt="Vijay Web Developer" />
      
    </div>
  </section>
    </div>
  )
}
