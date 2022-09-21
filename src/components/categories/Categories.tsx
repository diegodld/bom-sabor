import { IonContent, IonIcon, IonImg } from "@ionic/react";
import { star } from "ionicons/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import salgados from "../../assets/icons/salgados.svg";
import Container from "../container/Container";
import "./categories.css";
type Props = {};

const Categories = (props: Props) => {
  return (
    <Container>
      <div className="categories-container" style={{ color: "skyblue" }}>
        <Link to="/perfil">
          <div className="square-container">
            <IonImg src={salgados} className="mgb-2" />

            <p>Salgados</p>
          </div>
        </Link>

        <Link to="/perfil">
          <div className="square-container">
            <IonImg src={salgados} className="mgb-2" />

            <p>Salgados</p>
          </div>
        </Link>
        <Link to="/perfil">
          <div className="square-container">
            <IonImg src={salgados} className="mgb-2" />

            <p>Salgados</p>
          </div>
        </Link>
        <Link to="/perfil">
          <div className="square-container">
            <IonImg src={salgados} className="mgb-2" />

            <p>Salgados</p>
          </div>
        </Link>
        <Link to="/perfil">
          <div className="square-container">
            <IonImg src={salgados} className="mgb-2" />

            <p>Salgados</p>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Categories;
