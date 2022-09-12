import React from "react";
import facebook from "../../assets/socialIcons/facebook.svg";
import twitter from "../../assets/socialIcons/twitter.svg";
import google from "../../assets/socialIcons/google.svg";
import { IonItem } from "@ionic/react";

const SocialMidias: React.FC = () => {
  return (
    <IonItem lines="none" className="ion-margin">
      <div className="center">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <img src={google} alt="ícone do google" />
        </a>
      </div>
    </IonItem>
  );
};

export default SocialMidias;
