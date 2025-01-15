import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSEZ-MOI <span className="purple"> MOI </span> ME PRÉSENTER
            </h1>
            <p className="home-about-body">
             Je suis de formation étudiante dans le domaine de génie logiciel et système
             d'information plus précisement en master 2. Cinq (5) ans d'expériences academique dans 
             ce domaine. de ce fait,
              <br />
              <br />Je connais couramment des classiques comme
              <i>
                <b className="purple"> java ,python, Javascript, html et css. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt se construisent de nouvelles &nbsp;
              <i>
                <b className="purple">Technologies et produits Web </b> et
                également dans les domaines liés à la {" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion pour le développement de produits
              avec  <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  Bibliothèque et frameworks Javascript modernes
                </b>
              </i>
              &nbsp; j'aime
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>trouvez moi sur mes réseaux sociaux selon votre preférence</h1>
            <p>
              n'hésitez pas <span className="purple">à me contacter </span>avec :
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/terap42/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/AliMahamatYou"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ali-mahamat-youssouf-8685622b7/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/alimahamatterap/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
