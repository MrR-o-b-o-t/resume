import "./Contact.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MDBRow, MDBCol, MDBInput, MDBContainer } from "mdb-react-ui-kit";

export default function Projects() {
  const [state, handleSubmit] = useForm("myykylgq");
  if (state.succeeded) {
    return <p>Thanks for reaching out! I will be in touch with you shortly.</p>;
  }

  return (
    <MDBContainer
      fluid
      id="contact__container"
      style={{ backgroundColor: "#212529" }}
    >
      <div class="custom-shape-divider-top-1643055266">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            style={{ fill: `rgba(73, 80, 87, 1)` }}
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 className="text-center">CONTACT</h1>
      <MDBRow className="text-center mt-5 d-flex justify-content-center">
        <MDBCol md="4">
          <form className="contact__input" onSubmit={handleSubmit}>
            <MDBInput
              labelClass="contact__form__label"
              className="mb-2"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <MDBInput
              labelClass="contact__form__label"
              labelStyle={{ color: "#212529" }}
              textarea
              wrapperClass="mb-4"
              rows={4}
              id="message"
              name="message"
              placeholder="Message"
              label="Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <MDBCol md="12">
              <button
                id="contact__btn"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </MDBCol>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
