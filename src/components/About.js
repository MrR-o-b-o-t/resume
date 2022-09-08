import "./About.css";
import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import rocket from "../images/rocket.png";
import responsive from "../images/responsive.png";
import intuitive from "../images/intuitive.png";
import dynamic from "../images/dynamic.png";
import headshot from "../images/headshot.jpg";
import {
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiJavascript1,
  DiCss3Full,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si";

export default function About() {
  return (
    <MDBContainer>
      <div id="about__container">
        <div id="about__title">
          <h1>ABOUT</h1>
        </div>
        <div className="d-flex justify-content-evenly">
          <MDBRow>
            <MDBCol size="md" className="text-center fadeIn">
              <img src={rocket} alt="rocket" />
              <h2>FAST</h2>
              <p>
                Fast load times and lage free interaction is my highest priority
              </p>
            </MDBCol>
            <MDBCol size="md" className="text-center">
              <img src={responsive} alt="responsive" />
              <h2>RESPONSIVE</h2>
              <p>My layouts will work on any device, big or small.</p>
            </MDBCol>
            <MDBCol size="md" className="text-center">
              <img src={intuitive} alt="intuitive" />
              <h2>INTUITIVE</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </MDBCol>
            <MDBCol size="md" className="text-center">
              <img src={dynamic} alt="dynamic" />
              <h2>DYNAMIC</h2>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBContainer>
          <MDBRow around id="skills__row">
            <MDBCol size="md" className="text-center">
              <img
                className="img-fluid rounded-pill"
                id="headshot"
                src={headshot}
                alt="headshot"
              />
              <h2 className="mt-2">Who am I?</h2>
              <p>
                I'm a Front End Developer for USAA. I'm passionate about
                creating intuitive, dynamic, & responsive user experiences.
              </p>
            </MDBCol>
          </MDBRow>
          <div className="mt-5">
            <MDBRow>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiReact className="FaStyles" />
                <h2>REACT</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <SiCsharp className="FaStyles" />
                <h2>C#</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiHtml5 className="FaStyles" />
                <h2>HTML5</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiCss3Full className="FaStyles" />
                <h2>CSS3</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiJavascript1 className="FaStyles" />
                <h2>Javascript</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiNodejs className="FaStyles" />
                <h2>Node.js</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiPostgresql className="FaStyles" />
                <h2>Postgres</h2>
              </MDBCol>
              <MDBCol size="3" className="text-center ml-md-auto">
                <DiGit className="FaStyles" />
                <h2>Git</h2>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </div>
    </MDBContainer>
  );
}
