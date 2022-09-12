import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  useIonRouter,
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
import Onboarding from "./components/onboarding/Onboarding";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { RootContext } from "./contexts/GlobalContext";
import { AuthContext } from "./contexts/AuthContext";

setupIonicReact();

const App: React.FC = () => {
  const { display } = React.useContext(RootContext);
  const { IsAuth } = React.useContext(AuthContext);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route render={() => <p>Página não encontrada!</p>} />

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registrar">
              <Register />
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
