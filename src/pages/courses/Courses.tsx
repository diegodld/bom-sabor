import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cursos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Cursos" />
      </IonContent>
    </IonPage>
  );
};

export default Courses;
