import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);

  return (
    <div>
      <Router>
        <div
          style={{
            display: "flex",
            width: 1024,
            margin: "auto",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Header />
          {user === null ? <Redirect to="/" /> : null}
          <header>
            {user === null ? (
              <button>
                <Link to="/log_in">Se connecter</Link>
              </button>
            ) : (
              <button
                onClick={() => {
                  Cookies.remove("userToken");
                  setUser(null);
                }}
              >
                Se déconnecter
              </button>
            )}
          </header>
        </div>

        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/sign_up">
            <SignUp />
          </Route>

          <Route path="/log_in">
            <LogIn setUser={setUser} />
          </Route>

          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
