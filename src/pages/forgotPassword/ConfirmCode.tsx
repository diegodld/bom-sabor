import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import Container from "../../components/container/Container";
import "./style.css";
type Props = {};

const ConfirmCode: React.FC = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar>
        <Container>
          <div className="flex-row">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/recuperar-senha" icon={arrowBack} />
            </IonButtons>
            <IonTitle className="subtitle ion-margin">
              Verificar número de telefone.
            </IonTitle>
          </div>
        </Container>
      </IonToolbar>

      <IonContent fullscreen>
        <Container>
          <IonItem lines="none" className="text-gray-sm mgb-1">
            Insira o código nos campos abaixo.
          </IonItem>
          <IonItem lines="none">
            <div className="flex-row mgb-2">
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
              <IonInput className="input-border" maxlength={1} />
            </div>
          </IonItem>
          <IonItem className="mgb-1" lines="none">
            <div>
              <span className="text-gray-sm">Não recebeu o código? </span>
              <span style={{ color: "var(--ion-color-primary)" }}>
                Reenviar.
              </span>
            </div>
          </IonItem>
          <IonButton
            expand="block"
            onClick={() =>
              (window.location.href = "/recuperar-senha/resetar-senha")
            }
          >
            Verificar
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmCode;
