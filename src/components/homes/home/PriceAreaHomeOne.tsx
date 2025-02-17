'use client';

import React, { useEffect, useState } from 'react';

const PriceAreaHomeOne = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="plan_home_area section-padding" style={{ marginTop: '-50px' }}>
      <div className="container">
        <div className="section-title text-center">
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Courses Offered</span>
        </div>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <div className="pricing-icon">
                    <i className="ti-medall"></i>
                  </div>
                  <h3 className="title">{course.title}</h3>
                </div>
                <div>
                  <a href="#contact" className="btn_one">Register Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceAreaHomeOne;
