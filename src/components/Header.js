import "./Header.css"
import React from "react"
import { MDBIcon } from "mdb-react-ui-kit"

export default function Header() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="header__container"
    >
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
  )
}
