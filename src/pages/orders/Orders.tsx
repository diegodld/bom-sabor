import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Orders: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pedidos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Pedidos" />
      </IonContent>
    </IonPage>
  );
};

export default Orders;
