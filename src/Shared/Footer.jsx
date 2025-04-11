import React from 'react';
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { mainlogo } from '../assets/main-logo.png';
import mainlogo from '../assets/main-logo.png';
const Footer = () => {
  return (
    <footer className=' footer bg-black text-white text-base-content p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20 justify-around '>
      <aside>
        <Link
          to='/'
          className='btn btn-ghost '>
          <img
            className='w-32 h-32'
            src={mainlogo}
            alt=''
          />{' '}
        </Link>
      </aside>
      <nav>
        <h6 className='footer-title'>Services</h6>
        <a className='link link-hover'>Branding</a>
        <a className='link link-hover'>Design</a>
        <a className='link link-hover'>Marketing</a>
        <a className='link link-hover'>Advertisement</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Company</h6>
        <a className='link link-hover'>About us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
        <a className='link link-hover'>Press kit</a>
      </nav>
      {/* social */}
      <nav className='w-1/4'>
        <h6 className='footer-title'>Social</h6>
        <div className='flex justify-between gap-4 text-xl '>
          <a className='link link-hover hover:text-[#1877F2] transition-colors duration-300'>
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a className='link link-hover hover:text-[#0A66C2] transition-colors duration-300'>
            <i>
              <FaLinkedin />
            </i>
          </a>
          <a className='link link-hover hover:text-[#E1306C] transition-colors duration-300'>
            <i>
              <FaInstagram />
            </i>
          </a>
          <a className='link link-hover hover:text-[#FF0000] transition-colors duration-300'>
            <i>
              <FaYoutube />
            </i>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
