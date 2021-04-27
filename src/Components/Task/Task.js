import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Task = (props) => {
  const dataContext = useContext(AuthContext);

  const delet = () => props.delete(props.index);

  const check = () => props.checkTask(props.index);

  const change = () => props.changeEdit(props.index, props.task);

  const priority = (event) =>
    props.changePrior(props.index, event.target.value);

  if (dataContext.auth) {
    return (
      <article className={`${props.ok} ${props.prior}`}>
        <input type="checkbox" name="check" id="check" onClick={check} />
        <h3>{props.task}</h3>
        <div className="botones">
          <button onClick={change}>Edit</button>
          <button onClick={delet}>Delete</button>
        </div>
        <select name="prioridad" id="prioridad" onChange={priority}>
          <option value="baja">Baja</option>
          <option value="alta">Alta</option>
        </select>
      </article>
    );
  } else {
    return (
      <article className={`${props.ok} ${props.prior}`}>
        <h3 className="lectura">{props.task}</h3>
      </article>
    );
  }
};

export default Task;
