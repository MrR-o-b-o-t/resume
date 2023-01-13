import "./Header.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import ParticlesBg from "particles-bg";
import HeadShake from "react-reveal/HeadShake";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { mode } = useTheme();
  return (
    <div className={`${mode}`}>
      <div
        className={`d-flex justify-content-center align-items-center ${mode}`}
        id="header__container"
      >
        <ParticlesBg type="cobweb" num={50} color="#425664" bg={true} />
        <div id="header__inner__div">
          <h1>
            Hello, I'm <span>Sam Kautz</span>.
          </h1>
          <h1>I'm a full-stack web developer.</h1>
          <a href="#project__container__inner">
            <HeadShake delay={1000}>
              <button id="work__btn">
                View my work
                <MDBIcon
                  id="work__btn__icon"
                  fas
                  size="xs"
                  icon="arrow-right"
                />
              </button>
            </HeadShake>
          </a>
        </div>
      </div>
    </div>
  );
}
