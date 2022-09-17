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

const ResetPassword: React.FC = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar>
        <Container>
          <div className="flex-row">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/recuperar-senha" icon={arrowBack} />
            </IonButtons>
            <IonTitle className="subtitle ion-margin">
              Criar uma nova senha
            </IonTitle>
          </div>
        </Container>
      </IonToolbar>

      <IonContent fullscreen>
        <Container>
          <IonItem lines="none" className="text-gray-sm mgb-2">
            Insira uma nova senha e confirme.
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">NOVA SENHA</IonLabel>
            <IonInput
              placeholder="Digite a nova senha"
              type="password"
              name="password"
              required
            />
          </IonItem>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">CONFIRMAR SENHA</IonLabel>
            <IonInput
              placeholder="Confirme a nova senha"
              type="password"
              name="password"
              required
            />
          </IonItem>
          <IonButton
            onClick={() =>
              (window.location.href = "/recuperar-senha/resetar-senha/sucesso")
            }
            expand="block"
          >
            Resetar Senha
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;
