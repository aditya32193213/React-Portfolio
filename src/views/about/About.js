import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile2.png";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>

        <Container>
          <Row className="pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Image className="profile" alt="profile" src={Profile} />
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row className="align-items-start p-2 my-details rounded">
                <div className="about-text">
                  Motivated and detail-oriented professional with experience in
                  customer support (voice and non-voice) seeking to transition
                  into the IT industry as a Full Stack Web Developer. Currently
                  enrolled in a Full Stack Software Engineering with AI program
                  accredited by IIT Guwahati through AlmaBetter. Skilled in
                  JavaScript, MERN stack technologies, and web development tools.
                  Eager to leverage communication skills and technical
                  proficiency to build scalable and interactive web applications.
                </div>

                {/* ✅ FIXED BUTTON LAYOUT */}
                <div className="button-container">
                  <a
                    href="#contact"
                    className="btn btn-outline-primary about-btn"
                  >
                    Let&apos;s Talk
                  </a>

                  <a
                    href="https://drive.google.com/file/d/16W8TWiwomTmBacHXUpHbUO8Tq0cqRypj/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success about-btn"
                  >
                    My Resume
                  </a>

                  <a
                    href="https://github.com/aditya32193213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark about-btn"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aditya3213/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info about-btn"
                  >
                    LinkedIn
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
