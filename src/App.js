import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import AuthContext from './contexts/AuthContext'

function App() {
  const [state, setstate] = useState({ user: "Conrad" });
  const [auth, setAuth] = useState(true);

  const handleLogged = () => setAuth(!auth)

  const dataContext = {
    auth,
    handleLogged
  }

  return (
    <div className="App">
      <AuthContext.Provider value={dataContext}>
        <Header user={state.user} />
        <Main />
      </AuthContext.Provider>
    </div>
  );
}

export default App;