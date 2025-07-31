import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../data/blogs';

const BlogSection = () => {
  const blogs = getAllBlogs().slice(0, 4); // Show only first 4 blogs on home page

  return (
    <section className="py-16 section-bg relative overflow-hidden">
      {/* 3D glassy background */}
      <div className="absolute inset-0 z-0" aria-hidden="true" style={{ pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '90%',
          height: '80%',
          background: 'linear-gradient(120deg, rgba(26,35,126,0.12) 0%, rgba(0,200,83,0.10) 50%, rgba(255,153,51,0.10) 100%)',
          filter: 'blur(32px)',
          borderRadius: '2rem',
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="glass-card py-10 px-4">
          <h3 className="text-3xl font-bold text-center mb-10 tracking-tight glass-heading">Latest Blogs & Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#FF9933]/60 scrollbar-track-transparent" style={{ WebkitOverflowScrolling: 'touch' }}>
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-[#F0F0F0] min-w-[260px]">
                <div>
                  <h4 className="text-xl font-semibold text-[#1A237E] mb-2">{blog.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{blog.summary}</p>
                </div>
                <Link to={`/blog/${blog.id}`} className="mt-auto text-[#FF9933] font-semibold hover:underline text-left">
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/blog" 
              className="inline-block bg-[#FF9933] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67c00] transition"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 