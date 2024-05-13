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
import book from "../../Assets/Projects/book.png"
import vote from "../../Assets/Projects/vote.png"
import job from "../../Assets/Projects/job.png"
import todo from "../../Assets/Projects/todo.png"
import cnn from "../../Assets/Projects/cnn.png"
import snake from "../../Assets/Projects/snake.png"
import news from "../../Assets/Projects/news.png"
import price from "../../Assets/Projects/price.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book-Store"
              description="Created an online bookstore with catalog, cart, checkout, reviews, and admin panel—embarked on freelancing journey through this client project!"
              ghLink="https://github.com/rahul-754/Book-Store"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={price}
              isBlog={false}
              title="Amazon Price Tracker"
              description="An Amazon price tracker built with Python, React.js, and MongoDB. Seamlessly monitors prices, alerts users of changes, and stores data for analysis, providing a comprehensive shopping experience."
              ghLink="https://github.com/rahul-754/Portfolio"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Online Voting System"
              description="Efficient, convenient, accessible; security, privacy, verification—online voting's evolving promise."
              ghLink="https://github.com/rahul-754/Voting-App"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Image segementation CNN"
              description="CNNs extract features from images through convolutional layers, then classify pixels into segments, enabling tasks like object detection and image understanding."
              ghLink="https://github.com/rahul-754/Image-segmentation-using-CNN"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Placement Portal"
              description="This project is used to maintain the placement regarding activities efficiently in the campus built with php and JavaScript  Xampp  Server"
              ghLink="https://github.com/rahul-754/Placement---portal---main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do App"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
