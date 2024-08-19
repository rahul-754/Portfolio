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
              demoLink="virtual-voice-assistant-chi.vercel.app"
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
              imgPath={cnn}
              isBlog={false}
              title="Image segmentation CNN"
              description="CNNs extract features from images through convolutional layers, then classify pixels into segments, 
                enabling tasks like object detection and image understanding.}"
              ghLink="https://github.com/rahul-754/Image-segmentation-using-CNN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book-Store"
              description="Created an online bookstore with catalog, cart, checkout, reviews, and admin panel—
                embarked on freelancing journey through this client project!}"
              ghLink="https://github.com/rahul-754/Book-Store"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do App"
              description="The to-do app helps users manage tasks efficiently by allowing them to add, edit, delete, and track their daily activities."
              ghLink="https://github.com/rahul-754/Todo-App"
              demoLink="https://todo-app-three-kappa-65.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
