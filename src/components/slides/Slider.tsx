import { IonCard, IonItem, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";

type sliderProps = {
  id?: number;
  img: string;
  title: string;
  description: string;
  alt: string;
};

const Slider: React.FC<sliderProps> = (props) => {
  return (
    <IonCard className="no-shadow" style={{ marginBottom: "1rem" }}>
      <IonItem lines="none">
        <img src={props.img} alt={props.alt} style={{ margin: "1rem auto" }} />
      </IonItem>

      <IonCardTitle className="subtitle ion-text-center">
        {props.title}
      </IonCardTitle>
      <IonCardContent className="text-gray-sm ion-text-center">
        {props.description}
      </IonCardContent>
    </IonCard>
  );
};

export default Slider;
