import { IonButton, IonContent, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import Container from "../../components/container/Container";
import Slider from "../../components/slides/Slider";
import check from "../../assets/ilustrations/orangeCheck.svg";

type Props = {};

const SuccesRegister: React.FC = (props: Props) => {
  return (
    <IonPage>
      <IonToolbar />
      <IonContent>
        <Container>
          <Slider
            img={check}
            alt="ilustração"
            title="Conta Criada com sucesso!"
            description="Pronto! Agora com a sua nova conta você já pode ter acesso a todo o aplicativo, vamos lá?"
          />
          <IonButton
            expand="block"
            onClick={() => (window.location.href = "/login")}
          >
            Acessar
          </IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default SuccesRegister;
