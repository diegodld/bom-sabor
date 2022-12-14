import React from "react";
import { Redirect, Route } from "react-router-dom";

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  tvOutline,
  bagHandleOutline,
  personCircleOutline,
} from "ionicons/icons";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./contexts/AuthContext";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import VerifyPhoneNumber from "./pages/forgotPassword/VerifyPhoneNumber";
import ConfirmCode from "./pages/forgotPassword/ConfirmCode";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ResetSuccess from "./pages/resetPassword/ResetSuccess";
import SuccesRegister from "./pages/register/SuccesRegister";

setupIonicReact();

const App: React.FC = () => {
  const { IsAuth } = React.useContext(AuthContext);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route render={() => <p>Página não encontrada!</p>} />

            <Route
              exact
              path="/login"
              render={() => {
                return !IsAuth ? <Login /> : <Redirect to="/home" />;
              }}
            />

            <Route exact path="/registrar">
              <Register />
            </Route>
            <Route exact path="/registrar/sucesso">
              <SuccesRegister />
            </Route>
            <Route exact path="/recuperar-senha">
              <ForgotPassword />
            </Route>
            <Route exact path="/recuperar-senha/verificar-numero">
              <VerifyPhoneNumber />
            </Route>
            <Route exact path="/recuperar-senha/verificar-numero/confirm">
              <ConfirmCode />
            </Route>
            <Route exact path="/recuperar-senha/resetar-senha">
              <ResetPassword />
            </Route>
            <Route exact path="/recuperar-senha/resetar-senha/sucesso">
              <ResetSuccess />
            </Route>
            <Route
              exact
              path="/home"
              render={() => {
                return IsAuth ? <Home /> : <Redirect to="/login" />;
              }}
            ></Route>
            <Route
              exact
              path="/cursos"
              render={() => {
                return IsAuth ? <Courses /> : <Redirect to="/login" />;
              }}
            ></Route>
            <Route
              path="/pedidos"
              render={() => {
                return IsAuth ? <Orders /> : <Redirect to="/login" />;
              }}
            ></Route>
            <Route
              path="/perfil"
              render={() => {
                return IsAuth ? <Profile /> : <Redirect to="/login" />;
              }}
            ></Route>
            <Route exact path="/">
              <Onboarding />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom" className={IsAuth ? "" : "ion-hide"}>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="courses" href="/cursos">
              <IonIcon icon={tvOutline} />
              <IonLabel>Cursos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="orders" href="/pedidos">
              <IonIcon icon={bagHandleOutline} />
              <IonLabel>Pedidos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/perfil">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
