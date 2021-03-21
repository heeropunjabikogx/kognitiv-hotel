import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">Contact</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h2 className="mb-5">Rajat Gupta</h2>
        <h4>Email Address - 7rajatgupta@gmail.com</h4>{" "}
        <p>
          {" "}
          I'm currently staying in Bangalore, India. <br />
          I work as a Product Engineer at Greyamp Consulting Pvt Ltd. <br />
          I'm a Computer Science Graduate <br /> I put my passion in creating
          Complex products and progressive web apps in a minimalist way.
        </p>{" "}
        <h5>Please check out my Blogs...</h5>
        <h5>
          <a
            className="btn btn-secondary"
            href="https://rajatgupta.substack.com"
          >
            Rajat Gupta on Substack.
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Contact;
