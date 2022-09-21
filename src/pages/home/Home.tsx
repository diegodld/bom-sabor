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
import Categories from "../../components/categories/Categories";
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
          <Categories />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
