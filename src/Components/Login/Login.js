import { useState, useContext } from "react";
import logo from "../../logo.svg";
import AuthContext from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import FetchLogin from "../../Hooks/FetchLogin";

function Login(props) {
  const [checkName, setCheckName] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const history = useHistory();
  const dataContext = useContext(AuthContext);

  const habdleCheckName = (el) => setCheckName(el.target.value);

  const handleCheckPass = (el) => setCheckPass(el.target.value);

  const checkUser = async () => {
    const res = await FetchLogin(checkName, checkPass);
    const data = await res.json();

    if (data.status === 200) {
      alert(data.data);
      dataContext.handleLogged();
      history.push("/");
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 406) {
      alert(data.data);
    }
  };

  return (
    <div className="main">
      <div className="login">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titulo">LogIn</h1>
        <input
          type="text"
          placeholder="Escribe aqui tu email"
          onChange={habdleCheckName}
        />
        <input
          type="password"
          placeholder="Escribe aquí tu contraseña"
          onChange={handleCheckPass}
        />
        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Keep me signed in</label>
        </div>
        <div className="botones">
          <button onClick={checkUser} type="button">
            Log-In
          </button>
          <button type="button">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
