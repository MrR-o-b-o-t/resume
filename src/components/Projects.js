import './Projects.css'
import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBContainer,
} from 'mdb-react-ui-kit'

import boePortfolio from '../images/boePortfolio.PNG'
import titusDocConvert from '../images/titusDocConvert.PNG'
import yips from '../images/yips.PNG'
import titusCms from '../images/titusCms.PNG'

export default function Projects() {
  return (
    <div id='project__container'>
      <div id='project__container__inner'>
        <div id='project__title'>
          <h1>PROJECTS</h1>
        </div>
        <MDBContainer>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol className='portfolio__cards'>
              <MDBCard className='h-100'>
                <MDBCardImage src={boePortfolio} alt='...' position='top' />
                <MDBCardBody className='text-center'>
                  <a href='https://boe-texas.herokuapp.com/' target='blank'>
                    <button className='project__button'>LEARN MORE</button>
                  </a>
                  <MDBCardText className='card__title mt-3'>
                    Bank of England Texas
                  </MDBCardText>
                  <MDBCardText className='mt-3'>
                    React JS, Bootstrap
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className='portfolio__cards'>
              <MDBCard className='h-100'>
                <MDBCardImage src={titusDocConvert} alt='...' position='top' />
                <MDBCardBody className='text-center'>
                  <a
                    href='https://titus-doc-converter.herokuapp.com/'
                    target='blank'
                  >
                    <button className='project__button'>LEARN MORE</button>
                  </a>
                  <MDBCardText className='card__title mt-3'>
                    Titus Document Convert
                  </MDBCardText>
                  <MDBCardText className='mt-3'>
                    React JS, Python, Pandas
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className='portfolio__cards'>
              <MDBCard className='h-100'>
                <MDBCardImage src={yips} alt='...' position='top' />
                <MDBCardBody className='text-center'>
                  <a href='https://yips.co/' target='blank'>
                    <button className='project__button'>LEARN MORE</button>
                  </a>
                  <MDBCardText className='card__title mt-3'>YIPS</MDBCardText>
                  <MDBCardText className='mt-3'>Liquid, CSS, HTML</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className='portfolio__cards'>
              <MDBCard className='h-100'>
                <MDBCardImage src={titusCms} alt='...' position='top' />
                <MDBCardBody className='text-center'>
                  <button className='project__button'>LEARN MORE</button>
                  <MDBCardText className='card__title mt-3'>
                    Titus CMS
                  </MDBCardText>
                  <MDBCardText className='mt-3'>
                    React JS, MUI, Redux, Node.js, MangoDB
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  )
}
