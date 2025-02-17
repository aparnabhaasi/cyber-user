'use client';

import React, { useState, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  course: string;
  country?: string;
}

const BookingArea = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    course: '',
    country: '',
  });
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile || !formData.course) {
      setError('Please fill out all required fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', mobile: '', course: '', country: '' });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking_area section-padding">
      <div className="container">
        <div className="section-title text-center">
           <span>Register Now</span>
            <h2>Secure Your Spot - Register Now!</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group col-md-6">
                  <label>Mobile</label>
                  <input type="text" name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="form-group col-md-6">
                  <label>Course</label>
                  <select name="course" className="form-control" value={formData.course} onChange={handleChange} required>
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.title} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>Country</label>
                  <input type="text" name="country" className="form-control" value={formData.country} onChange={handleChange} />
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn_one" disabled={loading}>{loading ? 'Submitting...' : 'Book Now'}</button>
                </div>
              </div>
              {success && <p className="text-success text-center mt-3">Booking successful!</p>}
              {error && <p className="text-danger text-center mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingArea;
