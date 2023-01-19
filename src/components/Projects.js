import "./Projects.css";
import React, { useState } from "react";
import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardFooter,
  MDBCardTitle,
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

import Fade from "react-reveal/Fade";

import dC1 from "../images/dc1.png";
import dC2 from "../images/dc2.png";
import cherry from "../images/cc.png";
import fbl from "../images/fbl.png";
import jas from "../images/js.png";
import ft1 from "../images/ft1.png";
import ft2 from "../images/ft2.png";

import boe from "../images/boe.png";

import { useTheme } from "../hooks/useTheme";

export default function Projects() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [dcModal, setdcModal] = useState(false);
  const toggleShow2 = () => setdcModal(!dcModal);

  const [ftModal, setftModal] = useState(false);
  const toggleShow3 = () => setftModal(!ftModal);

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
            <Fade left>
              <MDBCard className="h-100">
                <MDBCardImage src={boe} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Bank of England Texas
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <button onClick={toggleShow} className="project__button">
                    LEARN MORE
                  </button>
                </MDBCardFooter>
              </MDBCard>
            </Fade>

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog size="l" centered>
                <MDBModalContent>
                  <MDBModalHeader className={`${mode}`}>
                    <MDBModalTitle>Bank of England Texas</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className={`${mode}`}>
                    <MDBCard className="h-100">
                      <MDBCardImage src={boe} alt="..." position="top" />
                      <MDBCardBody className="text-center">
                        <MDBCardText className={`mt-3 ${mode} rounded p-3`}>
                          Built for Bank of England Texas using React JS, Redux,
                          Node.js, MDBReact, JavaScript, GSAP, and CSS.
                          <br />
                          <br />
                          This was my first industry level project. As a junior
                          developer and working solo it presented many
                          challenges and many learning oppurtunites. It provided
                          me the oppurtunity to take a deep dive into React,
                          Redux, Node, MDBReact, and Git for version control.
                          <br />
                          <br />
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
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBModalBody>

                  <MDBModalFooter>
                    <button className="project__button" onClick={toggleShow}>
                      Close
                    </button>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>

            {/* Dev Connector Card */}
            <Fade bottom>
              <MDBCard className="h-100">
                <MDBCardImage src={dC1} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Dev Connector
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <button className="project__button" onClick={toggleShow2}>
                    LEARN MORE
                  </button>
                </MDBCardFooter>
              </MDBCard>
            </Fade>

            <MDBModal show={dcModal} setShow={setdcModal} tabIndex="-1">
              <MDBModalDialog size="l" centered>
                <MDBModalContent>
                  <MDBModalHeader className={`${mode}`}>
                    <MDBModalTitle>Dev Connector</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow2}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className={`${mode}`}>
                    <MDBCard className="h-100">
                      <MDBCardImage src={dC2} alt="..." position="top" />
                      <MDBCardBody className="text-center">
                        <MDBCardText className={`mt-3 ${mode} rounded p-3`}>
                          Built for myself and fellow devs working on projects
                          in our free time using React.js, Node.js, MUIReact,
                          CSS, and a few npm packages for the frontend. The
                          backend is handled using FireBase.
                          <br />
                          <br />I built this application for me and my team
                          members to keep track of bugs and other tasks. I took
                          inspiration from a Jira board my team used during my
                          day job. Users are able to create a profile and login
                          with FireBase. Data for projects are also stored with
                          FireBase and can be dynamically displayed on a users
                          dashboard depending on that persons user rights. Users
                          can see which developers are online in real time and
                          add comments under individual tasks. Task can be
                          completed and removed but only by the user who created
                          the task.
                          <br />
                          <br />
                          <a
                            href="https://devtracker-b3494.firebaseapp.com/"
                            target="blank"
                          >
                            <button className="project__button">
                              View Live
                            </button>
                          </a>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBModalBody>

                  <MDBModalFooter>
                    <button className="project__button" onClick={toggleShow2}>
                      CLOSE
                    </button>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>

            {/* Finance Tracker Card */}
            <Fade right>
              <MDBCard className="h-100">
                <MDBCardImage src={ft1} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Firebase Finance
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <button className="project__button" onClick={toggleShow3}>
                    LEARN MORE
                  </button>
                </MDBCardFooter>
              </MDBCard>
            </Fade>

            <MDBModal show={ftModal} setShow={setftModal} tabIndex="-1">
              <MDBModalDialog size="l" centered>
                <MDBModalContent>
                  <MDBModalHeader className={`${mode}`}>
                    <MDBModalTitle>Firebase Finance Tracker</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow3}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className={`${mode}`}>
                    <MDBCard className="h-100">
                      <MDBCardImage src={ft2} alt="..." position="top" />
                      <MDBCardBody className="text-center">
                        <MDBCardText className={`mt-3 ${mode} rounded p-3`}>
                          We've all seen the finance tracker. I won't blow any
                          smoke, this one isn't much different.
                          <br />
                          <br />I built this application while learning how to
                          use Firebase and learning the Ant Design library. It's
                          fairly simple in that users can login, logout, signup,
                          and add and delete items from their account. Users can
                          only view, add, and delete data they have added to
                          their account. Although it was a strait forward
                          project it still took me several weeks to complete.
                          Writing the custom hooks, actions, and learning the
                          Firebase hooks took some time.
                        </MDBCardText>
                        <br />
                        <br />
                        <a
                          href="https://financetracker-20936.web.app/"
                          target="blank"
                        >
                          <button className="project__button">View Live</button>
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBModalBody>

                  <MDBModalFooter>
                    <button className="project__button" onClick={toggleShow2}>
                      CLOSE
                    </button>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>

            {/* Cherry Coatings Card */}
            <Fade left>
              <MDBCard className="h-100">
                <MDBCardImage src={cherry} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Cherry Coatings
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <a href="https://cherrycoatings.com/" target="blank">
                    <button className="project__button">LEARN MORE</button>
                  </a>
                </MDBCardFooter>
              </MDBCard>
            </Fade>

            {/* Forbes Barrentine Law Card */}
            <Fade bottom>
              <MDBCard className="h-100">
                <MDBCardImage src={fbl} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Forbes Barrentine Law
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <a href="https://forbesbarrentinelaw.com/" target="blank">
                    <button className="project__button">LEARN MORE</button>
                  </a>
                </MDBCardFooter>
              </MDBCard>
            </Fade>

            {/* JS Card */}
            <Fade right>
              <MDBCard className="h-100">
                <MDBCardImage src={jas} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    Johnson and Sons Commercial Floors
                  </MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <a href="https://johnsonandsons.net/" target="blank">
                    <button className="project__button">LEARN MORE</button>
                  </a>
                </MDBCardFooter>
              </MDBCard>
            </Fade>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
