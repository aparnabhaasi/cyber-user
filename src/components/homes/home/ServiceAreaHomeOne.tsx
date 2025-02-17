'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const slider_setting = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
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
  '*Physical Protection*',
  '*Network Protection*',
  '*Endpoint Protection*',
  '*Application Protection*',
];

const ServiceAreaHomeOne = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('api/index/service');
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setErrorMessage('Error fetching services. Please check the API or your network connection.');
      }
    };

    fetchServices();
  }, []);

  // Function to get a short description (e.g., 100 characters)
  const getShortDescription = (description: string, length: number = 100) => {
    return description.length > length ? `${description.substring(0, length)}...` : description;
  };

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
                <Link href="/service" className="btn_two">
                  View all services <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {errorMessage ? (
              <div className="col-12 text-center text-danger">{errorMessage}</div>
            ) : services.length > 0 ? (
              services.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="single_service">
                    <Image
                      src={
                        service.imageUrl.startsWith('/uploads')
                          ? `http://localhost:3001${service.imageUrl}`
                          : service.imageUrl
                      }
                      alt={service.title || 'Service'}
                      width={500}
                      height={300}
                      className="img-fluid"
                    />
                    <h2>{service.title || 'Untitled Service'}</h2>
                    <p>{getShortDescription(service.description || 'No description available.')}</p>
                    <Link href={`/service/`}>
                      Read More <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">No services found.</div>
            )}
          </div>
        </div>
      </section>

      <div className="marq_text">
        <div id="supermarquee1">
          <Slider {...slider_setting} className="swiper-container tp-text-slider-4-active">
            {slider_data.map((item, i) => (
              <div key={i} className="me-4">
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
