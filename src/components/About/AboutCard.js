import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenu, moi c'est <span className="purple">ALI MAHAMAT YOUSSOUF </span>
          depuis <span className="purple"> dakar, au senegal.</span>
            <br />
           Je suis actuellement en master 2 en cours à esp-ucad à la recherche de stage en alternance (2 semaines en entreprise une semaine à l'école)
            <br />
           J'avais effectué plusieurs stages pour mettre en place mes pratiques
            <br />
            <br />
            En dehors du codage, d'autres activités que j'adore faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux (football)
            </li>
            <li className="about-activity">
              <ImPointRight /> cinema
            </li>
            <li className="about-activity">
              <ImPointRight /> musique
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "il n'est jamais trop tard pour devenir ce que vous auriez pu ētre"{" "}
          </p>
          <footer className="blockquote-footer">ali mahamat youssouf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
