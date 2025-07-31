import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../data/blogs';

const BlogList = () => {
  const blogs = getAllBlogs();
  
  // Add body class for blog routes
  useEffect(() => {
    document.body.classList.add('blog-route');
    return () => {
      document.body.classList.remove('blog-route');
    };
  }, []);
  
  // Debug: Check if blogs are loading
  console.log('All blogs:', blogs);

  return (
    <div className="blog-list" style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '16px'
        }}>
          <Link to="/" style={{ color: '#f97316', textDecoration: 'underline' }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '48px 16px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '16px'
          }}>
            Latest Blogs & Updates
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Stay updated with the latest compliance news, tax tips, and business insights from Finlytiq.
          </p>
        </div>

        {/* Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {blogs.map((blog) => (
            <article key={blog.id} style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{ padding: '24px' }}>
                {/* Tags */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} style={{
                      padding: '4px 12px',
                      backgroundColor: '#f97316',
                      color: '#ffffff',
                      fontSize: '14px',
                      borderRadius: '9999px'
                    }}>
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span style={{
                      padding: '4px 12px',
                      backgroundColor: '#e5e7eb',
                      color: '#6b7280',
                      fontSize: '14px',
                      borderRadius: '9999px'
                    }}>
                      +{blog.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1e3a8a',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  {blog.title}
                </h2>

                {/* Summary */}
                <p style={{
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.5'
                }}>
                  {blog.summary}
                </p>

                {/* Meta */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  color: '#9ca3af',
                  marginBottom: '16px'
                }}>
                  <span>By {blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Date */}
                <div style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  marginBottom: '24px'
                }}>
                  {new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>

                {/* Read More Button */}
                <Link 
                  to={`/blog/${blog.id}`}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f97316',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          marginTop: '64px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '16px'
          }}>
            Stay Updated
          </h3>
          <p style={{
            color: '#6b7280',
            marginBottom: '24px',
            maxWidth: '448px',
            margin: '0 auto 24px'
          }}>
            Get the latest compliance updates and tax tips delivered to your inbox.
          </p>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '448px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Your Email Address"
              style={{
                flex: '1',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#f97316',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogList; 