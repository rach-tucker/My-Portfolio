import React from 'react'
import '../CSS_Files/contactpage.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Contactpage() {

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };
    
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a front-end for full-stack developer role. <br /> Whether you need a creative thinker or problem solver, I'm your go-to person.<br />So why wait? Let's team up and build something amazing together!<br /> Get in touch with me now to start the conversation.</p>
        <ButtonMailto className='mailtobutton' label='email me' mailto='mailto:itsracheltucker@gmail.com'/>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>Rachel Tucker</span></p>
      </Container>
    </div>
  )
}

export default Contactpage