import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Menu() {
  const dataContext = useContext(AuthContext);

  return (
    <div className="menu-desplegable">
      <div className="perfil">
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <h3>Federico Dammhal</h3>
      </div>
      <ul className="menu-listado">
        <li>
          <Link to="/" onClick={dataContext.handleMenu}>
            HOME
          </Link>
        </li>
        <li>TASKS</li>
        {dataContext.auth ? (
          <li onClick={(dataContext.handleLogged, dataContext.handleMenu)}>
            LOGOUT
          </li>
        ) : (
          <li onClick={dataContext.handleMenu}>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
        <li onClick={dataContext.handleMenu}></li>
        <li onClick={dataContext.handleMenu}>EXIT</li>
      </ul>
    </div>
  );
}

export default Menu;
