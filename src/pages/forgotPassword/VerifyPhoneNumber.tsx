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
type Props = {};

const VerifyPhoneNumber = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar>
        <Container>
          <span style={{ display: "flex" }}>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/recuperar-senha" icon={arrowBack} />
            </IonButtons>
            <IonTitle className="subtitle ion-margin">
              Verificar número de telefone.
            </IonTitle>
          </span>
        </Container>
      </IonToolbar>

      <IonContent fullscreen>
        <Container>
          <IonItem lines="none" className="text-gray-sm mgb-2">
            Enviaremos um SMS com o código para o número (99) 99999-9999.
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">TELEFONE</IonLabel>
            <span style={{ display: "flex", marginTop: "1rem" }}>
              <img src={brazil} alt="flag" />
              <IonInput
                disabled
                value="(99) 99999-9999"
                name="telefone"
                required
              />
            </span>
          </IonItem>
          <IonButton
            expand="block"
            onClick={() =>
              (window.location.href =
                "/recuperar-senha/verificar-numero/confirm")
            }
          >
            Confirmar
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default VerifyPhoneNumber;
