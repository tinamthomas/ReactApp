import './App.css';
import RenderForm from './RenderForm';
import SignIn from './SignIn';
import { useKeycloak, ReactKeycloakProvider } from '@react-keycloak/web';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Keycloak from 'keycloak-js';

function App() {
  const { keycloak, initialized } = useKeycloak()
  return (
    <Router>
        {!keycloak.authenticated ?
          <div onClick={() => keycloak.login({ redirectUri: 'http://localhost:3000/home' })}>Signin</div>
          : <div onClick={() => keycloak.logout({ redirectUri: 'http://localhost:3000/' })}>Logout</div>
        }
        <Switch>
          <Route path="/home">
            {keycloak.authenticated ? <RenderForm /> : <UnauthenticatedUser />}
          </Route>

        </Switch>
    </Router>
  );
};

const UnauthenticatedUser = (props) => {
  return (
    <div>You are not authorized</div>
  )
}

const ProtectedApp = () => {
  const KeycloakSettings = Keycloak({
    "realm": "MyRealm",
    "url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "my-react-app",
    "public-client": true,
    "confidential-port": 0,
    "redirectUri": "http://localhost:3000/home",
    "clientId": "my-react-app"
  })

  return <ReactKeycloakProvider authClient={KeycloakSettings}><App /></ReactKeycloakProvider>;
}

export default ProtectedApp;
