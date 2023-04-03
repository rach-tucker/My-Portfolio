import React from 'react';
import '../CSS_Files/aboutpage.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function About () {
    return(
        <>
            <div className='aboutpage'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7}>
                    <h3 className='aboutmetext'>About Me</h3>
                    <p className='aboutdetails'>
                        I am a Software Development Wizard, with a fiery passion for creating unforgettable user interfaces. I thrive on taking an idea and bringing it to life with my expertise in Software Engineering. From crafting game-changing ideas to solving complex challenges, I'm always up for a challenge. Let's create something amazing together!
                    </p>
                    <ul className='skillslist'>
                        <Row>
                            <h3>Skills</h3>
                            <Col md={4}>
                                <li>HTML5/CSS3</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </Col>
                            <Col md={4}>
                                <li>React js</li>
                                <li>React-Bootstrap</li>
                                <li>Node js</li>
                                <li>Express</li>
                                <li>Flask|Jinja|SQLAlchemy</li>
                            </Col>
                            <Col md={4}>
                                <li>SQLite</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                                <li>DBeaver</li>
                            </Col>
                        </Row>
                    </ul>
                    </Col>
                    <Col>
                        <div className='webimage'></div>
                    </Col>
                </Row>
            </Container>

            </div>
        </>
    )
}