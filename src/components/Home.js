import React from 'react';
import '../CSS_Files/homepage.css';
import { Container, Row, Col } from 'react-bootstrap';
import Text from './Text.jsx';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

export default function Home () {
    return(
        <div className="homepagebackground">
            <Container>
                <Row>
                    <Col md={7}>
                        <h2 className='headtext'>Hello <span className='wave'>👋</span></h2>
                        <h2 className='nametext'>I'm Rachel Tucker</h2>
                        <span></span>
                        <Text />
                        <button onClick={() =>{
                            window.open("https://github.com/rach-tucker");
                        }}
                            className='socialmediabtn'><AiFillGithub className='icon'/></button>
                        <button onClick={() =>{
                            window.open("https://www.linkedin.com/in/its-rachel-tucker/");
                        }}
                            className='socialmediabtn'><FaLinkedin className='icon'/></button>
                    </Col>
                    <Col md={5}>
                        <div className="profileimage">
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}