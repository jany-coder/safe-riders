import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Vehicle from './components/Vehicle/Vehicle';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  <p>Name: {loggedInUser.name}</p>
  return (
    <div className="App">
      
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Name: {loggedInUser.name}</h1>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/book/:type">
              <Vehicle></Vehicle>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
