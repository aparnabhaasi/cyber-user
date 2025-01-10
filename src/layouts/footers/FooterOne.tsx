

import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <div className="footer section-padding"
        style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_footer">
              <Link href="/">
                <img 
                  src="assets/img/sinusoidal.png" 
                  alt="image-here" 
                  style={{ width: '180px', height: '80px' }} 
                />
              </Link>
                <p>Sinusoidal Cyber Technologies Pvt. Ltd., Hyderabad, a trusted name in cybersecurity training, research, and services.</p>
                <div className="social_profile">
                <ul>
  <li>
    <a 
      href="https://www.facebook.com/SinusoidaCyber" 
      className="f_facebook" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="ti-facebook" title="Facebook"></i>
    </a>
  </li>
  <li>
    <a 
      href="https://www.youtube.com/@cybersinusoidal" 
      className="f_youtube"
      style={{ backgroundColor: 'black', padding: '2px', borderRadius: '50%' }} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="ti-youtube" title="Youtube"></i>
    </a>
  </li>
  <li>
    <a 
      href="https://www.instagram.com/cyber_sinusoidal/" 
      className="f_instagram"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="ti-instagram" title="Instagram"></i>
    </a>
  </li>
</ul>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Important links</h4>
                <ul>
                  <li><a href="/about-2">About us</a></li>
                  <li><a href="/service">Services</a></li>
                  <li><a href="/pricing">Training</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Our services</h4>
                <ul>
                  <li><a href="#">Physical protection</a></li>
                  <li><a href="#">Network protection</a></li>
                  <li><a href="#">Endpoint protection</a></li>
                  <li><a href="#">Application protection</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Download App</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                <Link href="/"><img src="assets/img/play.png" className="foot_img" alt="image-here" /></Link>
                <Link href="/"><img src="assets/img/app.png" className="foot_img" alt="image-here" /></Link>
              </div>
            </div> */}
          </div>
          <div className="row fc">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_copyright">
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;