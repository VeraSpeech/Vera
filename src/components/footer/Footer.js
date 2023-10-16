import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get in touch!
        </p>
        <p className='footer-subscription-text'>
          Write your message to us at <a id="link" href="mailto:vera.speechapp@gmail.com">vera.speechapp@gmail.com</a>
        </p>

      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Vera
            </Link>
          </div>
          <small class='website-rights'>Vera © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link email'
              href='mailto:vera.speechapp@gmail.com'
            >
              <i class="fa fa-envelope-open"></i>
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/vera.speechapp/?hl=en'
            >
              <i class='fab fa-instagram' />
            </a>

            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/company/vera-speechapp'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
        <div class='social-media-wrap'>
          <Link to='/terms-en' className='nav-links' >
            Terms-En
          </Link>
          <Link to='/terms-zh' className='nav-links' >
            Terms-Zh
          </Link>            <Link to='/policy-en' className='nav-links' >
            Policy-En
          </Link>            <Link to='/policy-zh' className='nav-links' >
            Policy-Zh
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
