import "./Footer.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      <div id="footer__container">
        <div className="">
          <div className="d-flex">
            <div style={{ color: "white", margin: "10px" }}>
              <a
                target="blank"
                href="https://www.linkedin.com/in/sam-k-64455416a/"
              >
                <button className="footer__btn">
                  <MDBIcon fab icon="linkedin-in" />
                </button>
              </a>
            </div>
            <div style={{ color: "white", margin: "10px" }}>
              {" "}
              <a
                target="blank"
                href="https://www.facebook.com/profile.php?id=100072424584109"
              >
                <button target="blank" className="footer__btn">
                  <MDBIcon fab icon="facebook-f" />
                </button>
              </a>
            </div>
            <div style={{ color: "white", margin: "10px" }}>
              {" "}
              <a target="blank" href="https://github.com/Web-Dev-Jr">
                <button className="footer__btn">
                  <MDBIcon fab icon="github" />
                </button>
              </a>
            </div>
            <div style={{ color: "white", margin: "10px" }}>
              {" "}
              <button className="footer__btn">
                <MDBIcon fab icon="codepen" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#495057", color: "white" }}>
        <p
          style={{
            margin: "0",
            textAlign: "center",
            paddingBottom: "30px",
          }}
        >
          SAM KAUTZ {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
