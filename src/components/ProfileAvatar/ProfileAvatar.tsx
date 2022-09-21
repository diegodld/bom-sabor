import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { search, star } from "ionicons/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./profile.css";
type Props = {};

const ProfileAvatar: React.FC = (props: Props) => {
  return (
    <>
      <IonItem
        className="no-background light"
        lines="none"
        style={{ width: "100%" }}
      >
        <IonAvatar slot="start">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
          />
        </IonAvatar>
        <div className="address-info">
          <IonLabel>Receber agora em: </IonLabel>
          <IonLabel>Rua Prudente de Morais, 1597..</IonLabel>
        </div>
        <IonItem
          onClick={() => console.log("click")}
          slot="end"
          className="no-background clickable"
          lines="none"
        >
          <IonIcon color="light" icon={search}></IonIcon>
        </IonItem>
      </IonItem>
    </>
  );
};

export default ProfileAvatar;
