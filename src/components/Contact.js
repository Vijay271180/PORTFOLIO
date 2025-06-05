import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div className="container my-5">
       <h2 className="text-center mb-5">Contact</h2>

  <div className="contact-card">
    <img src="kt.jpg" alt="Profile" />
    <h4>Vijay Thorat</h4>
    <p>Feel free to connect with me:</p>

    <a href="https://instagram.com/yourusername" target="_blank" className="btn btn-social btn-instagram">
      <i className="fab fa-instagram"></i> Instagram
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" className="btn btn-social btn-facebook">
      <i className="fab fa-facebook-f"></i> Facebook
    </a>
    <a href="https://wa.me/91xxxxxxxxxx" target="_blank" className="btn btn-social btn-whatsapp">
      <i className="fab fa-whatsapp"></i> WhatsApp
    </a>
  </div>
    </div>
  )
}
