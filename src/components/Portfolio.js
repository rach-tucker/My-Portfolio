import React from 'react'
import '../CSS_Files/projects.css'
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'

function Projectlist() {
    return (
      <div className="projectbackground">
        <Container fluid className="project-section">
          <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                 //imgPath={useradminpanel}
                  isBlog={false}
                  title="Photography Web Application"
                  description="A *chef's kiss* React web application created for a photography business. Features images according to client, allows for user to send a direct email to client and is cross-platform/device friendly."
                  ghLink=""
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                  //imgPath={olximage}
                  isBlog={false}
                  title="Journal Web App"
                  description="This journal application is called 'Mood Ring', and was built with Flask. It features CRUD functionality and stores user journal entries via a SQLite Database. Journal entries have a unique background featuring an image fetched from a 3rd party API."
                  ghLink=""
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                  //imgPath={netfliximage}
                  isBlog={false}
                  title="Social Media Web App"
                  description=""
                  ghLink=""
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                 // imgPath={gridlinesbuilders}
                  isBlog={false}
                  title="Mobile Movie App"
                  description=""
                  ghLink=""
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                 // imgPath={charlespizza}
                  isBlog={false}
                  title="Weather App"
                  description=""
                  ghLink=""
                />
              </Col>
  
              <Col md={4} className="project-card">
                <ProjectCard
                  //imgPath={todolist}
                  isBlog={false}
                  title="Address Book"
                  description=""
                  ghLink=""
  
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
  export default Projectlist