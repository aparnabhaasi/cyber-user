
'use client'

import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_service_details">
                <img src="assets/img/service_details.jpg" className="img-fluid" alt="image" />
                <h2>Physical protection</h2>
                <p>Physical security encompasses strategies and measures implemented to protect personnel, assets, and information from unauthorized access, damage, theft, or other security breaches.</p>
                <p>Physical security serves as the first line of defense in safeguarding an organization’s critical assets. While cybersecurity protects against digital threats, physical security focuses on protecting employees, equipment, data, and facilities from theft, unauthorized access, and natural disasters. The absence of effective physical security measures can result in severe consequences, including data breaches, financial losses, and potential threats to human safety. By implementing comprehensive physical security strategies, organizations create a secure environment for employees and visitors while ensuring the protection of vital data and assets.</p>
              </div>
              {/* <div className="video-area"
                style={{
                  backgroundImage: `url(assets/img/video.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}>

                <a 
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}  
                className="magnific_popup video-button">
                  <i className="ti-image" ></i>
                </a>
              </div> */}
             <div className="single_ssd_info">
                <h3 className="section_subheading" style={{ marginBottom: "10px" }}>Importance of Physical Protection</h3>
                <h4 style={{ marginTop: "20px" }}>Safeguarding Assets and Personnel :</h4>
                <p>Physical security protects employees, facilities, and critical assets from real-world threats posed by internal and external intruders, ensuring data and operational safety.</p>
              </div>


              <div className="single_ssd_info">
                <h4>Preventing Security Breaches :</h4>
                <p>Physical attacks can lead to unauthorized access, theft, damage to IT assets, malware installation, or the creation of remote access points, jeopardizing overall security.</p>
              </div>

              <div className="single_ssd_info">
                <h4>Mitigating Risks :</h4>
                <p>Stringent physical security measures, combined with robust internal controls, are vital to defending against external threats and addressing risks posed by potential internal actors.</p>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* video modal end */}


    </>
  );
};

export default ServiceDetailsArea;