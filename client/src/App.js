import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'


import { AuthContext } from './helpers/AuthContext'
import AppNavbar from "./components/AppNavbar"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import AnswerPage from './pages/Answer1';

function App() {

  const [authState, setAuthState] = useState()
  const [authUser, setAuthUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3001/auth/user', {
      headers: {
        token: localStorage.getItem("token")
      }
    }).then(res => {
      if (res.data.error) {
        setAuthState(false)
        setAuthUser({})
      }
      else {
        setAuthState(true)
        setAuthUser(res.data)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ authState, setAuthState, authUser, setAuthUser }}>
      < Router >
        <>
          <AppNavbar />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/answer" component={AnswerPage} />
          </Switch>

        </>
      </Router >
    </AuthContext.Provider>
  );
}

export default App;
