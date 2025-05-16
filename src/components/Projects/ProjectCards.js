import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
<<<<<<< HEAD
=======
  const hasLinks = props.ghLink || props.demoLink;

>>>>>>> ec9147a (added 2 more projects2)
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
<<<<<<< HEAD
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
=======

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
>>>>>>> ec9147a (added 2 more projects2)

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
<<<<<<< HEAD
=======

        {!hasLinks && (
          <Button
            variant="secondary"
            disabled
            style={{
              marginTop: "10px",
              backgroundColor: "#d3d3d3",
              borderColor: "#d3d3d3",
              color: "#6c757d",
              cursor: "not-allowed",
            }}
          >
            Private
          </Button>
        )}
>>>>>>> ec9147a (added 2 more projects2)
      </Card.Body>
    </Card>
  );
}
<<<<<<< HEAD
export default ProjectCards;
=======

export default ProjectCards;
>>>>>>> ec9147a (added 2 more projects2)
