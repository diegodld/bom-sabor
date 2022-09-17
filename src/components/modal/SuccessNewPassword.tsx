import React, { useState, useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import Container from "../container/Container";

function SuccessModalNewPassword() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Container>
          <IonButton id="open-modal" expand="block">
            Open
          </IonButton>
          <p>{message}</p>
          <IonModal
            ref={modal}
            trigger="open-modal"
            onWillDismiss={(ev) => onWillDismiss(ev)}
          >
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton
                    color="dark"
                    onClick={() => modal.current?.dismiss()}
                  >
                    Cancel
                  </IonButton>
                </IonButtons>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="end">
                  <IonButton color="dark" onClick={() => confirm()}>
                    Confirm
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonItem>
                <IonLabel position="stacked">Enter your name</IonLabel>
                <IonInput ref={input} type="text" placeholder="Your name" />
              </IonItem>
            </IonContent>
          </IonModal>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default SuccessModalNewPassword;
