import React from 'react';
import '../Info/Paragraphs.css';

const Paragraphs = () => {
  return (
    <section className="paragraphs">
      <div className="para-box">
        <h2>Performance</h2>
        <p>Experience instant torque and smooth acceleration with cutting-edge EV technology.</p>
      </div>
      <div className="para-box">
        <h2>Design</h2>
        <p>Every curve is crafted for beauty and aerodynamics, redefining modern luxury.</p>
      </div>
      <div className="para-box">
        <h2>Technology</h2>
        <p>Stay connected with intelligent infotainment, safety, and auto-driving features.</p>
      </div>
    </section>
  );
};

export default Paragraphs;
