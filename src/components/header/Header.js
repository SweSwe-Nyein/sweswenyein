import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBriefcase } from 'react-icons/bi';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import './header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <header>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skill" onClick={()=> setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><RiCodeSSlashLine /></a>
      <a href="#project" onClick={()=> setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><BiBriefcase /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiEnvelope /></a>
    </header>
  );
}

export default Header;