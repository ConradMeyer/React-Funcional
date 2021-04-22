import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  const [state, setstate] = useState({
    user: "Conrad",
  });

  return (
    <div className="App">
      <Header user={state.user} />
      <Main />
    </div>
  );
}

export default App;
