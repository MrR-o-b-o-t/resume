import "./Header.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { isFirefox } from "react-device-detect";
import stars from "../images/stars.mp4";
import nebula from "../images/nebula.jpg";

export default function Header() {
  if (!isFirefox) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        id="header__container"
      >
        <video
          loop={true}
          autoPlay={true}
          muted
          controls={false}
          playsInline
          id="bg-video"
          src={stars}
          type="video/mp4"
        />
        <div id="header__inner__div">
          <h1>
            Hello, I'm <span>Sam Kautz</span>.
          </h1>
          <h1>I'm a full-stack web developer.</h1>
          <a href="#project__container__inner">
            <button id="work__btn">
              View my work
              <MDBIcon id="work__btn__icon" fas size="xs" icon="arrow-right" />
            </button>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        id="header__container"
      >
        <img src={nebula} alt="Shooting Stars Background" id="bg-video" />
        <div id="header__inner__div">
          <h1>
            Hello, I'm <span>Sam Kautz</span>.
          </h1>
          <h1>I'm a full-stack web developer.</h1>
          <a href="#project__container">
            <button id="work__btn">
              View my work
              <MDBIcon id="work__btn__icon" fas size="xs" icon="arrow-right" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}
