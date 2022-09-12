import { IonButton } from "@ionic/react";
import React, {
  ButtonHTMLAttributes,
  HtmlHTMLAttributes,
  PropsWithChildren,
} from "react";
import "./button.css";

export const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren
> = (props) => {
  return <button onClick={props.onClick}{...props}>{props.children}</button>;
};
