import './About.css'
import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import rocket from '../images/rocket.png'
import responsive from '../images/responsive.png'
import intuitive from '../images/intuitive.png'
import dynamic from '../images/dynamic.png'
import headshot from '../images/headshot.jpg'

import { SkillBars } from 'react-skills'

export default function About() {
  const skillsData = [
    {
      name: 'CSS',
      level: 90,
      color: '#6C757D',
    },
    {
      name: 'HTML',
      level: 90,
      color: '#343A40',
    },
    {
      name: 'React',
      level: 70,
      color: '#6C757D',
    },
    {
      name: 'JavaScript',
      level: 70,
      color: '#343A40',
    },
    {
      name: 'Node.js',
      level: 60,
      color: '#6C757D',
    },
    {
      name: 'UI Design',
      level: 50,
      color: '#343A40',
    },
    {
      name: 'SQL',
      level: 40,
      color: '#6C757D',
    },
  ]

  return (
    <MDBContainer>
      <div id='about__container'>
        <div id='about__title'>
          <h1>ABOUT</h1>
        </div>
        <div className='d-flex justify-content-evenly'>
          <MDBRow>
            <MDBCol size='md' className='text-center fadeIn'>
              <img src={rocket} alt='rocket' />
              <h2>FAST</h2>
              <p>
                Fast load times and lage free interaction is my highest priority
              </p>
            </MDBCol>
            <MDBCol size='md' className='text-center'>
              <img src={responsive} alt='responsive' />
              <h2>RESPONSIVE</h2>
              <p>My layouts will work on any device, big or small.</p>
            </MDBCol>
            <MDBCol size='md' className='text-center'>
              <img src={intuitive} alt='intuitive' />
              <h2>INTUITIVE</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </MDBCol>
            <MDBCol size='md' className='text-center'>
              <img src={dynamic} alt='dynamic' />
              <h2>DYNAMIC</h2>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBContainer>
          <MDBRow around id='skills__row'>
            <MDBCol size='md' className='text-center'>
              <img
                className='img-fluid rounded-pill'
                id='headshot'
                src={headshot}
                alt='headshot'
              />
              <h2 className='mt-2'>Who am I?</h2>
              <p>
                I'm a Full-Stack Developer for Snax Media in Dallas, TX. I'm
                passionate about creating intuitive, dynamic, & responsive user
                experiences.
              </p>
            </MDBCol>
            <MDBCol id='skills__table__col' size='md'>
              <SkillBars skills={skillsData} animationDelay={4000} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBContainer>
  )
}
