import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import SocialMidias from "../../components/socialMidia/SocialMidias";
import { AuthContext } from "../../contexts/AuthContext";

type Props = {};

const Login: React.FC = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const userEmail = "teste@teste.com";
  const userPassword = "123";
  const history = useHistory();
  const { setLogin } = React.useContext(AuthContext);
  const [presentAlert] = useIonAlert();

  function handleLogin() {
    if (email === "" || password === "") {
      presentAlert({
        header: "Atenção",
        message: "Preencha todos os campos",
        buttons: ["OK"],
      });
      return;
    }
    if (email !== userEmail || password !== userPassword) {
      presentAlert({
        header: "Atenção",
        message: "Email ou senha inválida",
        buttons: ["OK"],
      });
      return;
    } else {
      setLogin(true);
      history.push("/home");
    }
  }

  return (
    <IonPage>
      <IonToolbar />

      <IonContent fullscreen className="ion-margin">
        <div className="container" color="">
          <IonTitle className="title ion-text-start ion-margin">Login</IonTitle>
          <IonItem className="mgb-2">
            <IonLabel position="stacked">EMAIL</IonLabel>
            <IonInput
              placeholder="Digite seu email"
              type="email"
              name="email"
              required
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SENHA</IonLabel>
            <IonInput
              placeholder="Digite sua senha"
              type="password"
              name="password"
              required
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-end ">
              <NavLink to="/registrar" color="primary">
                Esqueceu a senha?
              </NavLink>
            </IonLabel>
          </IonItem>

          <IonButton
            expand="block"
            style={{ marginBottom: "0" }}
            onClick={handleLogin}
          >
            Acessar
          </IonButton>
          <IonItem lines="none" className="text-gray-sm mgb-2">
            <span>Ainda não possui uma conta? </span>
            <span style={{ marginLeft: "4px" }}>
              <NavLink to="/registrar"> Cadastre-se!</NavLink>
            </span>
          </IonItem>
          <SocialMidias />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
