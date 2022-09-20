import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Container from "../../components/container/Container";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";

import "./home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <div className="header-container">
            <ProfileAvatar />
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
