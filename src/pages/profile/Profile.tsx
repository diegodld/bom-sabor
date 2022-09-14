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
  function handleLogout() {
    setLogin(false);
    window.location.href = "/login";
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Perfil" />
        <IonButton onClick={handleLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
