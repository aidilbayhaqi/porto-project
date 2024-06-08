import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { CardProject } from "./CardProject";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Project = () => {
  const projects = [
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussines Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Project</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laborum autem quae, a aperiam culpa?
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first" className="nav-pills justify-content-center align-item-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <CardProject key={index} {...project}></CardProject>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem, ipsum.</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem, ipsum.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="bg-img-right" />
    </section>
  );
};
