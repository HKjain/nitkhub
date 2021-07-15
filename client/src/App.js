import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppNavbar from "./components/AppNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    < Router >
      <>
        <AppNavbar />
        <Route exact path="/" component={Home} />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </>
    </Router >
  );
}

export default App;
