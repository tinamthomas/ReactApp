import './App.css';
import RenderForm from './RenderForm';
import Keycloak from 'keycloak-js';
import { useState } from "react";
import SignIn from './SignIn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const keycloakService = Keycloak('./keycloak.json');
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloak, setKeycloak] = useState(null);
  const keyCloackInit = () =>
    keycloakService.init({onLoad: 'login-required', redirectUri: 'http://localhost:3000/home' }).then(authenticated => {
      setAuthenticated(authenticated);
      setKeycloak(keycloakService);
      keycloakService.loadUserProfile()
      keycloakService.loadUserInfo()
    }).catch(e=>console.log("----"));

  return (
    <Router>
      <div>
        {authenticated ? 
        <div onClick={() => keycloak.logout({ redirectUri: 'http://localhost:3000/' })}>Logout</div>
          : <div onClick={keyCloackInit}>Signin</div>}
        <Switch>
          <Route path="/home">
            {authenticated ? <RenderForm />: <UnauthenticatedUser/>}
          </Route>
          <Route path="/signin" loginFunction>
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const UnauthenticatedUser = (props)=>{
  return (
      <div>You are not authorized</div>
  )
}

export default App;
