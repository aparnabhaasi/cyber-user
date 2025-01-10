import React from 'react';

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="ab_img">
                <img src="assets/img/18106.jpg" className="img-fluid" alt="image" />
              </div>
            </div> 
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
                <span>About us</span>
                <h2>Empowering Cybersecurity Through Innovation</h2>
              </div>
              <div className="abmv">
                <p> Sinusoidal Cyber Technologies Pvt. Ltd., Hyderabad, a trusted name in cybersecurity training, research, and services. Our team of seasoned professionals, industry experts, and dedicated researchers is committed to equipping businesses and individuals with the tools to tackle evolving digital threats. We offer personalized solutions, including the Tech CEO Faculty Program for leadership enhancement, the Company Director Incubation Program to develop security-focused strategies, and comprehensive protection services such as physical, network, endpoint, and application protection.</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p> */}
              </div>
              {/* <div className="abmv">
                <h4><img src="assets/img/check.png" alt="" /> Security management</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div> */}
            </div> 
          </div> 
        </div> 
      </section>
    </>
  );
};

export default AboutAreaHomeOne;