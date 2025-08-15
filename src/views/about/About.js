import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile2.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                {/* <br />Web Developer with expertise of React.js, Redux, HTML, CSS and Javascript. */}
                {/* <br /><br/> */}
                Motivated and detail-oriented professional with experience in customer support (voice and non-voice) seeking to transition into the IT industry as a Full Stack Web Developer.Currently enrolled in a Full Stack Software Engineering with AI program accredited by IIT Guwahati through AlmaBetter. Skilled in JavaScript, MERN stack technologies, and web development tools. Eager to leverage communication skills and technical proficiency to build scalable and interactive web applications.
                <br />
                {/* <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br /> */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1vjpmwEw3pb21DZReLtiPyyQQ3CL8-1y-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    {/* <a href="https://medium.com/@adibaabid" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Medium
                      </Button>
                    </a> */}
                  </div>
                  <div>
                    <a href="https://github.com/aditya32193213" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/aditya-487208b8/" target="_blank" rel="noopener    noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;