import { IonButton, IonContent, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import key from "../../assets/ilustrations/key.svg";
import Container from "../../components/container/Container";
import Slider from "../../components/slides/Slider";
type Props = {};

const ResetSuccess: React.FC = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar />
      <IonContent>
        <Container>
          <Slider
            title="Senha Alterada com sucesso"
            img={key}
            alt="Ilustração de uma chave"
            description="Deu certo! Agora com a nova senha você  já pode acessar o aplicativo novamente, vamos lá?"
          />
          <IonButton
            expand="block"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ResetSuccess;
