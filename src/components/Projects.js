import "./Projects.css";
import React, { useState } from "react";
import {
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import boePortfolio from "../images/boePortfolio.PNG";
import dC1 from "../images/dc-1.png";
import dC2 from "../images/dc-2.png";
import cherry from "../images/cherry.png";
import titusCms from "../images/titusCms.PNG";
import fbl from "../images/fbl.PNG";
import jas from "../images/jas.PNG";

import { useTheme } from "../hooks/useTheme";

export default function Projects() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [dcModal, setdcModal] = useState(false);
  const toggleShow2 = () => setdcModal(!dcModal);

  const { mode } = useTheme();
  return (
    <div className={`project__container ${mode}`}>
      <div id="project__container__inner">
        <div id="project__title">
          <h1>PROJECTS</h1>
        </div>
        <MDBContainer>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            {/* BOE Card */}
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage src={boePortfolio} alt="..." position="top" />
                <MDBCardBody className="text-center">
                  <button onClick={toggleShow} className="project__button">
                    LEARN MORE
                  </button>
                  <MDBCardText className="card__title mt-3">
                    Bank of England Texas
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>

              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog size="l" centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Bank of England Texas</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <MDBCard className="h-100">
                        <MDBCardImage
                          src={boePortfolio}
                          alt="..."
                          position="top"
                        />
                        <MDBCardBody className="text-center">
                          <a
                            href="https://boe-texas.firebaseapp.com/"
                            target="blank"
                          >
                            <button
                              onClick={toggleShow}
                              className="project__button"
                            >
                              View Live
                            </button>
                          </a>
                          <MDBCardText className="mt-3">
                            Built for Bank of England Texas using React JS,
                            Node.js, MDBReact, JavaScript, GSAP, and CSS.
                            <br />
                            <br />
                            This was my first industry level project. As a
                            junior developer and working solo it presented many
                            challenges and many learning oppurtunites. It
                            provided me the oppurtunity to take a deep dive into
                            React, Redux, Node, MDBReact, and Git for version
                            control.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBModalBody>

                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggleShow}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>

            {/* Dev Connector Card */}
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage
                  src={dC1}
                  alt="..."
                  position="top"
                  style={{ minHeight: "355px" }}
                />
                <MDBCardBody className="text-center">
                  <button className="project__button" onClick={toggleShow2}>
                    LEARN MORE
                  </button>
                  <MDBCardText className="card__title mt-3">
                    Dev Connector
                  </MDBCardText>
                </MDBCardBody>

                <MDBModal show={dcModal} setShow={setdcModal} tabIndex="-1">
                  <MDBModalDialog size="l" centered>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Dev Connector</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow2}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <MDBCard className="h-100">
                          <MDBCardImage src={dC2} alt="..." position="top" />
                          <MDBCardBody className="text-center">
                            <a
                              href="https://devtracker-b3494.firebaseapp.com/"
                              target="blank"
                            >
                              <button className="project__button">
                                View Live
                              </button>
                            </a>
                            <MDBCardText className="mt-3">
                              Built for myself and fellow devs working on
                              projects in our free time using React.js, Node.js,
                              MUIReact, CSS, and a few npm packages for the
                              frontend. The backend is handled using FireBase.
                              <br />
                              <br />I built this application for me and my team
                              members to keep track of bugs and other tasks. I
                              took inspiration from a Jira board my team used
                              during my day job. Users are able to create a
                              profile and login with FireBase. Data for projects
                              are also stored with FireBase and can be
                              dynamically displayed on a users dashboard
                              depending on that persons user rights. Users can
                              see which developers are online in real time and
                              add comments under individual tasks. Task can be
                              completed and removed but only by the user who
                              created the task.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBModalBody>

                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow2}>
                          Close
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </MDBCard>
            </MDBCol>
            {/* Cherry Coatings Card */}
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage src={cherry} alt="..." position="top" />
                <MDBCardBody className="text-center">
                  <a href="https://cherrycoatings.com/" target="blank">
                    <button className="project__button" onClick={toggleShow}>
                      LEARN MORE
                    </button>
                  </a>
                  <MDBCardText className="card__title mt-3">
                    Cherry Coatings
                  </MDBCardText>
                  <MDBCardText className="mt-3">
                    Liquid, CSS, HTML, JS
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage src={titusCms} alt="..." position="top" />
                <MDBCardBody className="text-center">
                  <button className="project__button">LEARN MORE</button>
                  <MDBCardText className="card__title mt-3">
                    Titus CMS
                  </MDBCardText>
                  <MDBCardText className="mt-3">
                    React JS, MUI, Redux, Node.js, MangoDB
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {/* Forbes Barrentine Law Card */}
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage src={fbl} alt="..." position="top" />
                <MDBCardBody className="text-center">
                  <a href="https://forbesbarrentinelaw.com/" target="blank">
                    <button className="project__button">LEARN MORE</button>
                  </a>
                  <MDBCardText className="card__title mt-3">
                    Forbes Barrentine Law
                  </MDBCardText>
                  <MDBCardText className="mt-3">
                    Wordpress, PHP, CSS
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="portfolio__cards">
              <MDBCard className="h-100">
                <MDBCardImage src={jas} alt="..." position="top" />
                <MDBCardBody className="text-center">
                  <a href="https://johnsonandsons.net/" target="blank">
                    <button className="project__button">LEARN MORE</button>
                  </a>
                  <MDBCardText className="card__title mt-3">
                    Johnson and Sons Commercial Floors
                  </MDBCardText>
                  <MDBCardText className="mt-3">
                    Wordpress, PHP, CSS
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
