import React from 'react'
import '../CSS_Files/projects.css'
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import photography from '../Assests/main--soulmbp.netlify.app_ (1).png';
import moodring from '../Assests/moodring.png';
import weather from '../Assests/weatherapp.png';
import reactsocial from '../Assests/socialnetwork.png';
import flasksocial from '../Assests/flasksocialnetwork.png'

function Projectlist() {
    return (
      <div className="projectbackground">
        <Container fluid className="project-section">
          <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                 imgPath={photography}
                  isBlog={false}
                  title="Photography Web Application"
                  description="A *chef's kiss* React web application created for a photography business. Features images according to client, allows for user to send a direct email to client and is cross-platform/device friendly."
                  ghLink="https://soulmbp.netlify.app/"
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={moodring}
                  isBlog={false}
                  title="Journal Web App"
                  description="This journal application is called 'Mood Ring', and was built with Flask. It features CRUD functionality and stores user journal entries via a SQLite Database. Journal entries have a unique background featuring an image fetched from a 3rd party API."
                  ghLink="https://moodring.onrender.com/"
                />
              </Col>
  
  
              <Col md={4} className="project-card">
                <ProjectCard
                 imgPath={weather}
                  isBlog={false}
                  title="Weather App"
                  description="This weather application was created in JavaScript and HTML. It makes API calls to OpenWeatherMap in order to give the user accurate weather data for any location! Its background images change on refresh."
                  ghLink="https://weatherheather.netlify.app/"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
  export default Projectlist