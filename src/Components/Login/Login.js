import { useEffect, useState, useContext } from "react";
import logo from "../../logo.svg";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Login(props) {
  const [name, setName] = useState("Conrad");
  const [pass, setPass] = useState("surfpunk92");
  const dataContext = useContext(AuthContext);

  return (
    <div className="main">
      <div className="login">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titulo">LogIn</h1>
        <input type="text" placeholder="Escribe aqui tu email" />
        <input type="text" placeholder="Escribe aquí tu contraseña" />
        <button onClick={dataContext.handleLogged}>
          <Link to="/">Log-In</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
