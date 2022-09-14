import React from "react";
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
import Container from "../../components/container/Container";
import brazil from "../../assets/brazilFlag.svg";
import "./style.css";
type Props = {};

const ConfirmCode = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="recuperar-senha" icon={arrowBack} />
        </IonButtons>
        <IonTitle className="subtitle ion-text-center ion-margin">
          Esqueceu sua senha?
        </IonTitle>
      </IonToolbar>

      <IonContent fullscreen>
        <Container>
          <IonItem lines="none" className="text-gray-sm mgb-1">
            Insira o código nos campos abaixo.
          </IonItem>
          <IonItem lines="none">
            <span className="mgb-2" style={{ display: "flex" }}>
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
            </span>
          </IonItem>
          <IonItem className="mgb-1" lines="none">
            <span>
              <span className="text-gray-sm">Não recebeu o código? </span>
              <span style={{ color: "var(--ion-color-primary)" }}>
                Reenviar.
              </span>
            </span>
          </IonItem>
          <IonButton
            routerLink="/recuperar-senha/verificar-numero/confirm"
            expand="block"
          >
            Verificar
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmCode;
