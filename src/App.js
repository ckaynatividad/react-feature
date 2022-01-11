
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';


function App() {
  const [user, setUser] = useState(getUser());
  // console.log('USER: ', user);
  const logoutUser = async () => {
    await logout();
    setUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user && (
              <><img src="http://25.media.tumblr.com/49d4192bb5f442a5e413d86dc9a51a63/tumblr_mlbuzoeVrw1qg389xo1_500.gif" /><button onClick={logoutUser}>Log out</button></>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
