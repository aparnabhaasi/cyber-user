"use client";

import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    course: "",
    country: "",
    captcha: "",
  });

  const [courses, setCourses] = useState<{ id: string; name: string }[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<{ id: string; name: string } | null>(null);

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses"); // replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Include the selected course in the formData
    const dataToSubmit = { ...formData, course: selectedCourse?.id || "" };

    // Submit the form data to the backend
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      // Handle success, e.g., show a success message
    } else {
      console.log("Form submission failed");
      // Handle failure, e.g., show an error message
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="course">Course</label>
          <Listbox value={selectedCourse} onChange={setSelectedCourse}>
            <div className="relative">
              <Listbox.Button className="w-full py-2 px-4 bg-gray-100 border rounded-md">
                {selectedCourse ? selectedCourse.name : "Select a course"}
              </Listbox.Button>
              <Listbox.Options className="absolute w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                {courses.map((course) => (
                  <Listbox.Option key={course.id} value={course}>
                    {({ active, selected }) => (
                      <div
                        className={`px-4 py-2 cursor-pointer ${
                          active ? "bg-blue-500 text-white" : ""
                        } ${selected ? "font-bold" : ""}`}
                      >
                        {course.name}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full py-2 px-4 bg-gray-100 border rounded-md"
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div>
          <label htmlFor="captcha">Captcha</label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
