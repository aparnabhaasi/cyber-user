
'use client'

import Link from 'next/link';
import Slider from 'react-slick';



// slider setting 
const slider_setting = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const slider_data = [
  "*Physical Protection*",
  "*Network Protection*",
  "*Endpoint Protection*",
  "*Application Protection*",
]
 
const ServiceAreaHomeOne = () => {


  return (
    <>
      <section className="service_area section-padding" style={{ marginTop: '-70px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <span>Our services</span>
                <h2>Complete Security Solutions for a Safer Digital Future</h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="ser_btn">
                <Link href="/service" className="btn_two">View all services <i className="ti-arrow-top-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="row">
  <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
    <div className="single_service">
      <img src="assets/img/129788.jpg" className="img-fluid" alt="image" />
      <h2>Physical protection</h2>
      <p>Physical security encompasses strategies and measures implemented to protect personnel, assets, and information from unauthorized access, damage, theft, or other security breaches.</p>
      <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
    </div>
  </div>
  <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
    <div className="single_service">
      <img src="assets/img/18107.jpg" className="img-fluid" alt="image" />
      <h2>Network protection</h2>
      <p>Organizations and companies managing significant volumes of data implement a range of solutions to counter various cyber threats.</p>
      <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
    </div>
  </div>
  <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
    <div className="single_service">
      <img src="assets/img/8290045_3824032.jpg" className="img-fluid" alt="image" />
      <h2>Endpoint protection</h2>
      <p>Endpoint security refers to the practice of safeguarding devices such as workstations, servers, and other systems capable of supporting security clients from malicious threats and cyberattacks.</p>
      <Link href="/service">Read More <i className="ti-arrow-top-right"></i></Link>
    </div>
  </div>
</div>

        </div>
      </section>

      <div className="marq_text">
        <div id="supermarquee1">

          <Slider
            {...slider_setting}
            className="swiper-container tp-text-slider-4-active"
          >
            {slider_data.map((item, i) => (
              <div key={i}
                className="me-4">
                 {item} 
              </div>
            ))}
          </Slider>


        </div>
      </div>

    </>
  );
};

export default ServiceAreaHomeOne;