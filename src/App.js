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

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Router>
          <Switch>
              <Route path="/login">
                  <Login>Login</Login>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
