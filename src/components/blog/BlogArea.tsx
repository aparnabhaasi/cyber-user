'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const BlogArea = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const openModal = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/${id}`);
      const data = await response.json();
      if (response.ok) {
        setSelectedBlog(data);
        setIsModalOpen(true);
      } else {
        console.error('Error fetching blog details:', data.error);
      }
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-6 col-sm-4 col-xs-12">
              <div className="single_blog">
                <Image
                  src={blog.imageUrl.startsWith('/uploads')
                    ? `http://cybers-six.vercel.app${blog.imageUrl}`
                    : blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="img-fluid"
                />
                <h3 className="text-white">{blog.title}</h3>
                <button onClick={() => openModal(blog.id)} className="blog_btn">
                  View Details <i className="ti-arrow-top-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Blog Details */}
      {isModalOpen && selectedBlog && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>

            {/* Title at the Top */}
            <h2 className="modal-title">{selectedBlog.title}</h2>

            {/* Image Below the Title */}
            <div className="modal-image">
              <Image
                src={selectedBlog.imageUrl.startsWith('/uploads')
                  ? `http://localhost:3000${selectedBlog.imageUrl}`
                  : selectedBlog.imageUrl}
                alt={selectedBlog.title}
                width={350}
                height={250}
                className="img-responsive"
              />
            </div>

            {/* Scrollable Description */}
            <div className="modal-body">
              <p>{selectedBlog.description}</p>
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
      `}</style>
    </section>
  );
};

export default BlogArea;
