'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const BlogDetailsArea = () => {
  const { id } = useParams(); // Get dynamic ID from URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
  
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();
  
        console.log('Fetched data:', data); // Check the fetched data here
  
        if (response.ok) {
          setBlog(data);
        } else {
          setError(data.error || 'Error fetching blog');
        }
      } catch (error) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlog();
  }, [id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <section className="service_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">
            <div className="single_blog_details">
              <Image
                src={blog.imageUrl.startsWith('/uploads')
                  ? `http://cybers-six.vercel.app${blog.imageUrl}`
                  : blog.imageUrl}
                alt={blog.title}
                width={800}
                height={400}
                className="img-fluid sbd"
              />
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
