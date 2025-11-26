import React from "react";
import profileImage from "../images/lester.png";

const Hero = ({ isVisible }) => {
  return (
    <section id='home' className={`hero py-5 ${isVisible ? "visible" : ""}`}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-md-start text-center'>
            <h1
              className='display-4 fw-bold mb-3 hero-title-custom'
              style={{ paddingLeft: "0.75rem" }}
            >
              Welcome to My{" "}
              <span className='text-primary hero-highlight-custom'>
                Portfolio
              </span>
            </h1>
            <p
              className='lead mb-4 text-secondary text-center'
              style={{ paddingLeft: "0.75rem" }}
            >
              Computer Science Student
            </p>
            <p className='mb-4 text-secondary text-center'>
              Hello! I'm Lester Allen M. Gomba, a 19-year-old Computer Science
              student at Pamantasan ng Cabuyao. This is my first web portfolio,
              focused on showcasing my skills and passion for frontend
              development and coding.
            </p>
            <div className='d-flex justify-content-md-center justify-content-center gap-3'>
              <button
                className='btn btn-primary'
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </button>
              <button
                className='btn btn-outline-primary'
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className='col-md-6 text-center'>
            <div
              className='rounded-circle overflow-hidden mx-auto'
              style={{ width: "250px", height: "250px" }}
            >
              <img
                src={profileImage}
                alt='Lester Allen M. Gomba'
                className='img-fluid rounded-circle'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
