'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  imageUrl: string;
  category: string;
  date: string;
  title: string;
}

const BlogAreaHomeOne = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched blogs:", data); // Debugging

        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (data && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          console.error("Unexpected API response:", data);
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewDetails = (blog: Blog) => {
    console.log("Selected Blog:", blog);
    setSelectedBlog(blog);
  };

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span>Blog & News</span>
          <h2>See our latest blog and <br />news from us</h2>
        </div>

        {loading ? (
          <p className="text-center">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center">No blogs found.</p>
        ) : (
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="single_blog">
                  {/* Ensure correct image URL */}
                  <Image
                    src={blog.imageUrl.startsWith("http") ? blog.imageUrl : `http://localhost:3001${blog.imageUrl}`}
                    width={500}
                    height={300}
                    className="img-fluid"
                    alt="Blog image"
                    onError={(e) => (e.currentTarget.src = "/placeholder-image.jpg")}
                  />

                  <span><Link href={`/blog-details/${blog.id}`}>{blog.category}</Link></span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <h3><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                  <button onClick={() => handleViewDetails(blog)} className="blog_btn">
                    View Details <i className="ti-arrow-top-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedBlog && (
          <div className="modal" style={modalStyle}>
            <div className="modal-content">
              <span onClick={() => setSelectedBlog(null)} className="close">&times;</span>
              <h2>{selectedBlog.title}</h2>

              {selectedBlog.imageUrl ? (
                <Image
                  src={selectedBlog.imageUrl.startsWith("http") ? selectedBlog.imageUrl : `http://localhost:3001${selectedBlog.imageUrl}`}
                  width={500}
                  height={300}
                  className="img-fluid"
                  alt="Blog image"
                  onError={(e) => (e.currentTarget.src = "/placeholder-image.jpg")}
                />
              ) : (
                <p>No Image Available</p>
              )}

              <p><strong>Category:</strong> {selectedBlog.category}</p>
              <p><strong>Date:</strong> {new Date(selectedBlog.date).toLocaleDateString()}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Modal Styles
const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export default BlogAreaHomeOne;
