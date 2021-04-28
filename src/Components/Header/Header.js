import { useState, useContext } from "react";
import logo from "../../logo.svg";
import square from "../../square.svg";
import AuthContext from "../../contexts/AuthContext";

const Header = (props) => {
  const [state, setState] = useState({ user: props.user });
  const dataContext = useContext(AuthContext);

  return (
    <>
      <div className="nav">
        <img
          src={square}
          alt="menu"
          onClick={dataContext.handleMenu}
          id="hamburguesa"
        />
      </div>
      <div className="header">
        <div className="bienvenida">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="titulo">ToDo List</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
