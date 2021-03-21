import React from "react";

const About = () => {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <h1 className="text-primary mt-5">About</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h3 className="mb-5">Book a Hotel ! </h3>
        <p>
          This is an awesome Hotel Booking Application created for Kognitiv
          Corp. as an assignment <br /> It can be used to browse, locate & as
          well book dummy hotels (if you want). <br /> Sounds Fun, right !
        </p>{" "}
        <p> Hope you enjoy your time on this app booking hotels.</p>
        <p>
          {
            "This app is developed using React with Hooks, TypeScript v4, Redux, Ant Design 4, Bootstrap 5, Styled Components,  redux-logger, redux-thunk and pure inspiration and hardwork."
          }
        </p>{" "}
        <br />
        <p>
          {
            "This app is Mobile and Tablet Responsive, has proper Routing handling, Form Validations, and Strict Type checking implemented inside each data structure."
          }{" "}
          <br />{" "}
          {
            "The UI is inspired by the original Kognitiv Corp website. I've put efforts to make this look like a complete product website even though it only allows us to book dummy hotels for now;)"
          }
        </p>
        <h5>
          {" "}
          <a
            className="mt-5 btn btn-primary"
            target="_blank"
            rel="noreferrer"
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
