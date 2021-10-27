import './App.css';
import RenderForm from './RenderForm';
import Keycloak from 'keycloak-js';
import { useState, useEffect } from "react";
function App() {
  const keycloakService = Keycloak('./keycloak.json');
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloak, setKeycloak] = useState(null);
  useEffect(async () => {
    keycloakService.init({onLoad: 'login-required'}).then(authenticated => {
      setAuthenticated(authenticated);
      setKeycloak(keycloakService) //WEIRD 
    })
  }, []);

  if(authenticated) {
    return (<>
      <RenderForm></RenderForm>
      <div onClick={()=> keycloak.logout({ redirectUri: 'http://localhost:3000/' })}>Logout</div>
       </>
     );
  }
  else {
    return <div>unauthenticated</div>
  }

}

export default App;
