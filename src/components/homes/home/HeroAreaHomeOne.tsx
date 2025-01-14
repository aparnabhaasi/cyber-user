'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="home_bg hb_height"
        style={{ 
          backgroundImage: `url(/assets/img/bg/mains.jpg)`, 
          backgroundSize: "cover", 
          backgroundPosition: "center center" 
        }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1 className="animated-header">Opt For The Best Cybersecurity Courses And Excel Beyond The Ordinary.</h1>
              </div>
              <div className="home_btns" style={{ paddingTop: "50px" }}>
                <Link href="/about-2" className="btn_one">Discover More</Link>
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animated-header {
          animation: fadeInUp 1.5s ease-out forwards;
        }

        /* Media query for smaller screens */
        @media (max-width: 768px) {
          .home_bg {
            height: 80vh; /* Adjust the height as needed */
          }
        }
      `}</style>
    </>
  );
};

export default HeroAreaHomeOne;
