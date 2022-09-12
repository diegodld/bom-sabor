import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import { AuthContext } from "../../contexts/AuthContext";

const Profile: React.FC = () => {
  const { setLogin } = React.useContext(AuthContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Perfil" />
        <IonButton onClick={() => setLogin(false)}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
