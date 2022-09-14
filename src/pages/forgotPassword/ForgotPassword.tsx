import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Container from "../../components/container/Container";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar>
        <Container>
          <span style={{ display: "flex" }}>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/login" icon={arrowBack} />
            </IonButtons>
            <IonTitle className="subtitle ion-margin">
              Esqueceu sua senha?
            </IonTitle>
          </span>
        </Container>
      </IonToolbar>

      <IonContent fullscreen>
        <Container>
          <IonItem lines="none" className="text-gray-sm mgb-2">
            Preencha o campo abaixo com seu email. Você irá receber um link para
            criar uma nova senha.
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
          <IonButton expand="block">Enviar</IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
