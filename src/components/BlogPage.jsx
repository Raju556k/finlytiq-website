import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../data/blogs';

const BlogPage = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  // Add body class for blog routes
  useEffect(() => {
    document.body.classList.add('blog-route');
    return () => {
      document.body.classList.remove('blog-route');
    };
  }, []);

  // Debug: Check if blog is found
  console.log('Blog ID:', id);
  console.log('Blog found:', blog);

  if (!blog) {
    return (
      <div className="blog-page" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        color: '#1f2937',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
            Blog Not Found
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            The blog you're looking for doesn't exist.
          </p>
          <p style={{ color: '#ef4444', marginBottom: '16px' }}>
            Debug: ID = {id}
          </p>
          <Link to="/blog" style={{ color: '#f97316', textDecoration: 'underline' }}>
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '24px',
            marginTop: '32px',
            lineHeight: '1.2'
          }}>
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '16px',
            marginTop: '24px',
            lineHeight: '1.3'
          }}>
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1e3a8a',
            marginBottom: '12px',
            marginTop: '20px',
            lineHeight: '1.4'
          }}>
            {line.substring(4)}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} style={{
            marginLeft: '24px',
            marginBottom: '8px',
            color: '#374151',
            lineHeight: '1.6'
          }}>
            {line.substring(2)}
          </li>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={index} style={{
            borderLeft: '4px solid #f97316',
            paddingLeft: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginTop: '16px',
            marginBottom: '16px',
            backgroundColor: '#fef3c7',
            fontStyle: 'italic',
            color: '#374151'
          }}>
            {line.substring(2)}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} style={{
            marginBottom: '16px',
            color: '#374151',
            lineHeight: '1.6'
          }}>
            {parts.map((part, i) => 
              i % 2 === 1 ? (
                <strong key={i} style={{ fontWeight: '600' }}>{part}</strong>
              ) : part
            )}
          </p>
        );
      }
      return (
        <p key={index} style={{
          marginBottom: '16px',
          color: '#374151',
          lineHeight: '1.6'
        }}>
          {line}
        </p>
      );
    });
  };

  return (
    <div className="blog-page" style={{
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
          maxWidth: '896px',
          margin: '0 auto',
          padding: '16px'
        }}>
          <Link to="/" style={{ color: '#f97316', textDecoration: 'underline' }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Blog Content */}
      <article style={{
        maxWidth: '896px',
        margin: '0 auto',
        padding: '32px 16px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '32px'
        }}>
          {/* Header */}
          <header style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              {blog.tags.map((tag, index) => (
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
            </div>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              {blog.title}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              color: '#6b7280',
              fontSize: '14px'
            }}>
              <span>By {blog.author}</span>
              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>{blog.readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#374151'
          }}>
            {renderContent(blog.content)}
          </div>

          {/* Footer */}
          <footer style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ color: '#6b7280' }}>Need help with your compliance?</p>
                <p style={{ color: '#f97316', fontWeight: '600' }}>
                  Contact us at team.finlytiq@gmail.com
                </p>
              </div>
              <Link 
                to="/blog" 
                style={{
                  backgroundColor: '#f97316',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                View All Blogs
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPage; 