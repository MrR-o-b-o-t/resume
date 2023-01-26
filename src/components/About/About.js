import "./About.css";

// Image Imports
import React from "react";
import rocket from "../../images/rocket.png";
import responsive from "../../images/responsive.png";
import intuitive from "../../images/intuitive.png";
import dynamic from "../../images/dynamic.png";
import headshot from "../../images/headshot.jpg";

// React Reveal Motion Import
import Fade from "react-reveal/Fade";

// Bootstrap Import
import { Row, Container, Col } from "react-bootstrap";

// React Icon Imports
import {
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiJavascript1,
  DiCss3Full,
  DiGit,
  DiHtml5,
} from "react-icons/di";

import { SiExpress, SiRedux, SiMongodb, SiPostman } from "react-icons/si";

// Theme Hook Import
import { useTheme } from "../../hooks/useTheme";

export default function About() {
  const { mode } = useTheme();
  return (
    <div className={`about__container ${mode}`}>
      <div id="about__title">
        <h1>ABOUT</h1>
      </div>
      <div
        style={{ borderBottom: "2px solid #425664" }}
        className="d-flex justify-content-evenly p-3"
      >
        <Row>
          <Col md className="text-center">
            <Fade bottom>
              <img src={rocket} alt="rocket" className="about-images" />
              <h2>FAST</h2>
              <p>
                Fast load times and lag free interaction is my highest priority
              </p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={500} bottom>
              <img src={responsive} alt="responsive" className="about-images" />
              <h2>RESPONSIVE</h2>
              <p>My layouts will work on any device, big or small.</p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={1000} bottom>
              <img src={intuitive} alt="intuitive" className="about-images" />
              <h2>INTUITIVE</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={1500} bottom>
              <img src={dynamic} alt="dynamic" className="about-images" />
              <h2>DYNAMIC</h2>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </Fade>
          </Col>
        </Row>
        <div className="overlay"></div>
      </div>
      <Container>
        <Row around id="skills__row">
          <Col size="md" className="text-center">
            <Fade up delay={200}>
              <img
                className="img-fluid rounded-pill"
                id="headshot"
                src={headshot}
                alt="headshot"
              />
            </Fade>
            <h2 className="mt-3">Who am I?</h2>
            <p>I'm a Full Stack Developer.</p>
            <p>
              I'm passionate about creating intuitive, dynamic, & responsive
              user experiences.
            </p>
            <h2 className="mt-5">Some of my skills include:</h2>
          </Col>
        </Row>
        <div className="mt-5">
          <Row className="grid">
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={200}>
                <DiReact color="#61DBFB" className="FaStyles" />
                <h2>REACT</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={300}>
                <SiExpress color="#383838" className="FaStyles" />
                <h2>Express</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={500}>
                <DiHtml5 color="#F06529" className="FaStyles" />
                <h2>HTML5</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={700}>
                <DiCss3Full color="#2565AE" className="FaStyles" />
                <h2>CSS3</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={900}>
                <DiJavascript1 color="#F0DB4F" className="FaStyles" />
                <h2>Javascript</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={1100}>
                <DiNodejs color="#3C873A" className="FaStyles" />
                <h2>Node.js</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={1300}>
                <DiPostgresql color="#4F688A" className="FaStyles" />
                <h2>Postgres</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={1500}>
                <DiGit color="#F1502F" className="FaStyles" />
                <h2>Git</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={1700}>
                <SiRedux color="#6b096b" className="FaStyles" />
                <h2>Redux</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={1900}>
                <SiMongodb color="#096b09" className="FaStyles" />
                <h2>MongoDB</h2>
              </Fade>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <Fade delay={2100}>
                <SiPostman color="#d78f0d" className="FaStyles" />
                <h2>Postman</h2>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
