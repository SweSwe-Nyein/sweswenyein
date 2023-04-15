import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer>
      <h3>Follow Me</h3>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/swe-swe-nyein-8665a5225/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/SweSwe-Nyein" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/sweswenyein20" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://twitter.com/Nyein10Swe?t=1OyRMRg9Vp4H3DQPhQToTA&s=09" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {getYear()}. Created with ❤️ by Swe Swe Nyein.</small>
      </div>
    </footer>
  );
}

export default Footer;