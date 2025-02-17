'use client';

import React, { useState } from 'react';

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="address_area section-padding" style={{ marginBottom: '-5px' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="single_address">
                <i className="ti-map"></i>
                <h4>Our Location</h4>
                <p>Door No. 203, 2nd Floor, SBR CV Tower<br /> Madhapur, Shaikpet, Hyderabad-500081, Telangana</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_address sabr">
                <i className="ti-mobile"></i>
                <h4>Telephone</h4>
                <p> 9656250000</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
              <div className="single_address">
                <i className="ti-email"></i>
                <h4>Send email</h4>
                <p> mail@cybersinusoidal.com</p>
                <p> sinusoidalcyber@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="contact" className="contact_area section-padding" style={{ marginTop: '0' }}>
        <div className="container">
          <div className="section-title text-center">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Subject</label>
                    <input type="text" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Message</label>
                    <textarea rows={6} name="message" className="form-control" value={formData.message} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn_one" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
                {success && <p className="text-success text-center mt-3">Message sent successfully!</p>}
                {error && <p className="text-danger text-center mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
