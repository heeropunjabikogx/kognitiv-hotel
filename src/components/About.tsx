import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">About</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h3 className="mb-5">Book a Hotel ! </h3>
        <p>
          This is an awesome Hotel Booking Application created for Kognitiv
          Corp. by Mr. Rajat Gupta <br /> It can be used to browse, locate & as
          well book dummy hotels (if you want). <br /> Sounds Fun, right !
        </p>{" "}
        <p> </p> <p> Hope you enjoy your time on this app booking hotels.</p>
        <h5>
          {" "}
          <a
            className="mt-5 btn btn-primary"
            target="_blank"
            href="https://github.com/7rajatgupta/kognitiv-hotel"
          >
            Source Code for this project
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;
