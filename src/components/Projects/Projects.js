import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import book from "../../Assets/Projects/book.png";
import vote from "../../Assets/Projects/vote.png";
import job from "../../Assets/Projects/job.png";
import todo from "../../Assets/Projects/todo.png";
import cnn from "../../Assets/Projects/cnn.png";
import snake from "../../Assets/Projects/snake.png";
import news from "../../Assets/Projects/news.png";
import price from "../../Assets/Projects/price.png";
import poster from "../../Assets/poster.avif";
import mahotsav from "../../Assets/mahotsav.png";
import dta from "../../Assets/dta.jpg";
import clientunbord from "../../Assets/clientunbord.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dta}
              isBlog={false}
              title="Data Product Automation"
              description="An end-to-end automation system built with Python for large-scale data processing. It automates scraping, cleaning, and standardization of 1.3 lakh entries, with Indian name-matching and gender prediction models for quality control."

                //  demoLink="#"
              // ghLink="https://github.com/rahul-754/Placement---portal---main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clientunbord}
              isBlog={false}
              title="Client Onboarding Automation"
              description="Developed an automated client onboarding process using GMB APIs, service selection, agreements, real-time PO tracking, Google ads dashboard(campaign data, insights, and performance metrics from Google Ads) integrated with WhatsApp Bot and personalized updates."


                //  demoLink="https://www.vignan.ac.in/mahotsav/"
              // ghLink="https://github.com/rahul-754/Placement---portal---main"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mahotsav}
              isBlog={false}
              title="Mahotsav"
              description="This project is used to maintain the Mahotsav event activities efficiently in the campus 
                built with PHP and JavaScript using XAMPP Server."
                 demoLink="https://www.vignan.ac.in/mahotsav/"
              // ghLink="https://github.com/rahul-754/Placement---portal---main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              title="KaaryaSathi"
              description="**KaryaSathi** (कार्य साथी) is an innovative app that connects customers with skilled workers like electricians and plumbers, providing seamless booking, secure payments, and reliable service, ensuring all your household tasks are efficiently managed."
              ghLink="https://github.com/rahul-754/utility-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Campus Placement Portal"
              description="This project is used to maintain the placement regarding activities efficiently in the campus 
                built with PHP and JavaScript using XAMPP Server.}"
              ghLink="https://github.com/rahul-754/Placement---portal---main"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={price}
              isBlog={false}
              title="Virtual Voice Assistant"
              description="A virtual voice assistant to control the device using voice."
              ghLink="https://github.com/rahul-754/virtual-voice-assistant"
              demoLink="https://virtual-voice-assistant-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Online Voting System"
              description="A voting application to collect the exit polls. During the election time"
              ghLink="https://github.com/rahul-754/Voting-App"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do App"
              description="A password manager securely stores passwords and URLs, allowing easy access and management of login credentials for various accounts."
              ghLink="https://github.com/rahul-754/Todo-App"
              demoLink="https://todo-app-three-kappa-65.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Image segmentation CNN"
              description="CNNs extract features from images through convolutional layers, then classify pixels into segments, 
                enabling tasks like object detection and image understanding.}"
              ghLink="https://github.com/rahul-754/Image-segmentation-using-CNN"
            />
          </Col>
          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;