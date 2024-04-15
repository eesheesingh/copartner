import React from 'react';
import '../components/css/Blog.css';
import { blogs } from './constants/data';
import { Link } from 'react-router-dom';

const Blog = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <section className="section">
      <div className="blog-container">
        <div className="blog-content-left">
          <h2 className='subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]'>Our Blogs</h2>
        </div>
        <div className="blog-content-right">
          <p className="text-90 md:text-xl text-[#c9c9c9] mb-6 md:px-[1rem]">
          With Cobalt, managing your business finances is effortless, 
empowering, and anything but boring. Our intuitive platform brings
clarity to your cash flow, simplifies your financial decision-making, and  
fingertips.{" "}
            <span className="text-white">
            Say no to spreadsheets and tools designed in the 80s.
            </span>
          </p>
        </div>
      </div>
      <div className="blog-container">
        <div className='blog-box-content'>
          {blogs.slice(0, 3).map(blog => (
            <Link to={`/blogs/${blog.id}`} onClick={scrollToTop} className='blog-box-three' key={blog.id}>
              <img src={blog.imageUrl} alt={`Box ${blog.id}`} />
              <div className='darken-overlay'></div>
              <div className='box-contents'>
                <h3 className='box-subheading'>{blog.heading1}</h3>
                <p className='box-para'>{blog.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="blog-container">
        <div className='blog-box-content'>
          {blogs.slice(3, 5).map(blog => (
            <Link to={`/blogs/${blog.id}`} onClick={scrollToTop} className={blog.id === 10004 ? 'blog-box-two left-box' : 'blog-box-two right-box'} key={blog.id}>
              <img src={blog.imageUrl} className={blog.id === 10004 ? 'apps-img' : ''} alt={`Box ${blog.id}`} />
              <div className='darken-overlay'></div>
              <div className='box-contents'>
                <h3 className='box-subheading'>{blog.heading1}</h3>
                <p className='box-para'>{blog.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Link to='blogs' onClick={scrollToTop} className="main-button">Explore More + </Link>
      </div>
    </section>
  );
};

export default Blog;
