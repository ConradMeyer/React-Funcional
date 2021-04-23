import { useEffect, useState } from "react";
import logo from '../../logo.svg';

const Header = props => {

    const [state, setState] = useState({ user: props.user })

    return (
        <div className="header">
            <div className="bienvenida">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="titulo">ToDo List</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h2 className="personal">Lista de tareas de {state.user ? state.user : "Anónimo"}</h2>
        </div>
    )
}

export default Header;