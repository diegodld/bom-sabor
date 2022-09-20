import { IonAvatar, IonButton, IonIcon, IonLabel } from "@ionic/react";
import { search, star } from "ionicons/icons";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const ProfileAvatar: React.FC = (props: Props) => {
  return (
    <>
      <div
        className=" flex-row ion-justify-content-between ion-align-items-center"
        style={{ width: "100%" }}
      >
        <div className="flex-row ion-align-items-center">
          <IonAvatar slot="start" className="ion-margin">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
            />
          </IonAvatar>
          <div>
            <p>Receber agora em: </p>
            <p>Rua Prudente de Morais, 1597..</p>
          </div>
        </div>
        <span>
          <IonIcon icon={search} slot="end"></IonIcon>
        </span>
      </div>
    </>
  );
};

export default ProfileAvatar;
