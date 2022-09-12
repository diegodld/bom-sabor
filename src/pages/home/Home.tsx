import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "../../components/button/Button";
import ExploreContainer from "../../components/ExploreContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle color="light" className="ion-text-center">
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-margin">
        <div className="container">
          <h1 className="title">Home</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
