import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Menu";
import AuthContext from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [state, setstate] = useState({ user: "Conrad" });
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleLogged = () => setAuth(!auth);
  const handleMenu = () => setMenu(!menu);

  const dataContext = {
    auth,
    handleLogged,
    menu,
    handleMenu,
  };

  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={dataContext}>
          <Menu />
          <Header user={state.user} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
