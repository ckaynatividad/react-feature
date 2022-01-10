
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';


function App() {
  const [user, setUser] = useState(getUser());
  console.log('USER: ', user);
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
              <><h1>Welcome User</h1><button onClick={logoutUser}>Log out</button></>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
