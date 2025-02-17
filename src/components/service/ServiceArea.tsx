'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const ServiceArea = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch services from the backend API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/service');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const openModal = async (id: string) => {
    try {
      const response = await fetch(`/api/service/${id}`);
      const data = await response.json();
      if (response.ok) {
        setSelectedService(data);
        setIsModalOpen(true);
      } else {
        console.error('Error fetching service details:', data.error);
      }
    } catch (error) {
      console.error('Error fetching service details:', error);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="service_area section-padding">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6 col-sm-4 col-xs-12">
              <div className="single_service">
                <Image
                  src={service.imageUrl.startsWith('/uploads')
                    ? `http://cybers-six.vercel.app${service.imageUrl}`
                    : service.imageUrl}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="img-fluid"
                />
                <h3 className="text-white">{service.title}</h3>
                <button onClick={() => openModal(service.id)} className="service_btn">
                  View Details <i className="ti-arrow-top-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>

            {/* Title at the Top */}
            <h2 className="modal-title">{selectedService.title}</h2>

            {/* Image Below the Title */}
            <div className="modal-image">
              <Image
                src={selectedService.imageUrl.startsWith('/uploads')
                  ? `http://cybers-six.vercel.app${selectedService.imageUrl}`
                  : selectedService.imageUrl}
                alt={selectedService.title}
                width={350}
                height={250}
                className="img-responsive"
              />
            </div>

            {/* Scrollable Description */}
            <div className="modal-body">
              <p>{selectedService.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          background: black;
          color: white;
          border: 2px solid white;
          border-radius: 12px;
          width: 50vw;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          overflow: hidden;
        }
        .modal-title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }
        .modal-image {
          width: 350px;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          border-radius: 8px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-body {
          overflow-y: auto;
          max-height: 50vh;
          width: 100%;
          padding-right: 10px;
          scrollbar-width: thin;
          scrollbar-color: white black;
          text-align: center;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
          color: white;
          background: transparent;
          border: none;
        }
        .service_btn {
          display: inline-block;
          color: white;
          background: #ff5722;
          padding: 10px 15px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }
        .service_btn:hover {
          background: #e64a19;
        }
      `}</style>
    </section>
  );
};

export default ServiceArea;
