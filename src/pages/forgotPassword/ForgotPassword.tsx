import {
  IonAlert,
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
  useIonAlert,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Container from "../../components/container/Container";

type Props = {};

const ForgotPassword: React.FC = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [presentAlert] = useIonAlert();
  function handleEmail() {
    if (email) {
      window.location.href = "/recuperar-senha/verificar-numero";
    } else {
      presentAlert({
        header: "Atenção",
        message: "Insira um email",
        buttons: ["OK"],
      });
    }
  }

  return (
    <IonPage>
      <IonToolbar>
        <Container>
          <div className="flex-row">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/login" icon={arrowBack} />
            </IonButtons>
            <IonTitle className="subtitle ion-margin">
              Esqueceu sua senha?
            </IonTitle>
          </div>
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
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>
          <IonButton expand="block" onClick={handleEmail}>
            Enviar
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
