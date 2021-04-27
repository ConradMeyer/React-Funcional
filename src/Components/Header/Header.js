import { useState, useContext } from "react";
import logo from "../../logo.svg";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [state, setState] = useState({ user: props.user });
  const dataContext = useContext(AuthContext);

  return (
    <>
      <div className="nav">
        {dataContext.auth ? (
          <button onClick={dataContext.handleLogged}>Log-Out</button>
        ) : (
          <button>
            <Link to="/login">Log-In</Link>
          </button>
        )}
      </div>
      <div className="header">
        <div className="bienvenida">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="titulo">ToDo List</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/* <h2 className="personal">
        Lista de tareas de {state.user ? state.user : "Anónimo"}
      </h2> */}
      </div>
    </>
  );
};

export default Header;
