import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/container/Container";
import SocialMidias from "../../components/socialMidia/SocialMidias";

type Props = {};

const Register = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar />
      <IonContent fullscreen className="ion-margin">
        <Container>
          <IonTitle className="title ion-text-start ion-margin">
            Criar conta
          </IonTitle>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">NOME</IonLabel>
            <IonInput
              placeholder="Digite seu nome"
              type="text"
              name="name"
              required
            />
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">EMAIL</IonLabel>
            <IonInput
              placeholder="Digite seu email"
              type="email"
              name="email"
              required
            />
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">SENHA</IonLabel>
            <IonInput
              placeholder="Digite sua senha"
              type="password"
              name="password"
              required
            />
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">CONFIRMAR SENHA</IonLabel>
            <IonInput
              placeholder="Digite sua senha novamente"
              type="password"
              name="confirmPassword"
              required
            />
          </IonItem>
          <IonButton expand="block" style={{ marginBottom: "0" }}>
            Cadastrar
          </IonButton>
          <IonItem lines="none" className="text-gray-sm mgb-2">
            <span>Já possui uma conta? </span>
            <span style={{ marginLeft: "4px" }}>
              <NavLink to="/login"> Entrar.</NavLink>
            </span>
          </IonItem>
          <SocialMidias />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Register;
