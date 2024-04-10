import React from 'react';
import './css/Blog.css';
import { blog1, blog2, blog3, blog4, blog5 } from '../assets';

const Blog = () => {
  return (
    <section className="section">
      <div className="blog-container">
        <div className="blog-content-left">
          <h2 className="subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]">
            Our Blogs
          </h2>
        </div>
        <div className="blog-content-right">
          <p className="text-90 md:text-xl text-[#ffffff7d]">
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips.{' '}
            <span style={{ color: '#FFF' }}>
              Say no to spreadsheets and tools designed in the 80s.
            </span>
          </p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-box-content">
          <div className="blog-box-three">
            <img src={blog1} alt="Box 1" />
            <div className="darken-overlay"></div>
            <div className="box-contents">
              <h3 className="box-subheading">Lorem Ipsum dolor simple</h3>
              <p className="box-para">
                All your data and finances in one place to provide quick
                answers and make decisions instantly.
              </p>
            </div>
          </div>
          <div className="blog-box-three">
            <img src={blog2} alt="Box 2" />
            <div className="darken-overlay"></div>
            <div className="box-contents">
              <h3 className="box-subheading">Control Finances On the Go</h3>
              <p className="box-para">
                Have full control of your business finances on the go using our
                iOS/Android mobile apps. Because, you know, it’s 2023.
              </p>
            </div>
          </div>
          <div className="blog-box-three">
            <img src={blog3} alt="Box 3" />
            <div className="darken-overlay"></div>
            <div className="box-contents">
              <h3 className="box-subheading">Lorem Ipsum dolor simple</h3>
              <p className="box-para">
                Choose the alerts you need and receive them via email, mobile
                or Slack. Review and take action in one click.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-box-content">
          <div className="blog-box-two left-box">
            <img src={blog4} className="apps-img" alt="Box 4" />
            <div className="darken-overlay"></div>
            <div className="box-contents">
              <h3 className="box-subheading">Built-in Integrations</h3>
              <p>
                Bring your data with our built-in integrations for accounting,
                revenue tools and banking.
              </p>
            </div>
          </div>
          <div className="blog-box-two right-box">
            <img src={blog5} alt="Box5" />
            <div className="darken-overlay"></div>
            <div className="box-contents">
              <h3 className="box-subheading">Lorem Ipsum dolor simple</h3>
              <p>
                Lightning fast. Shortcuts for everything. Command+K on Mac,
                Ctrl+K on Windows. Dark mode.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <a href="#home" className="main-button">
          Explore More +{' '}
        </a>
      </div>
    </section>
  );
};

export default Blog;
