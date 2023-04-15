import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h3>Feel Free to</h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <p>If I can be of assistance, please do not hesitate to contact me at <a href="mailto:sweswe4720@gmail.com">sweswe4720@gmail.com</a></p>
        <a href="mailto:sweswe4720@gmail.com" className='btn btn-primary'>Get In Touch</a>
      </div>
    </section>
  );
}

export default Contact;