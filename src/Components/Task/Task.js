import { useEffect, useState } from "react";

const Task = (props) => {

  const delet = () => props.delete(props.index);

  const check = () => props.checkTask(props.index);

  const change = () => props.changeEdit(props.index, props.task)

  return (
    <article className={`${props.ok}`}>
      <input type="checkbox" name="check" id="check" onClick={check} />
      <h3>{props.task}</h3>
      {/* <input type="text" placeholder="Edita tu tarea" onChange={edit} /> */}
      <div className="botones">
        <button onClick={change}>Edit</button>
        <button onClick={delet}>Delete</button>
      </div>
      <select name="prioridad" id="prioridad">
        <option value="Baja">Baja</option>
        <option value="Alta">Alta</option>
      </select>
    </article>
  );
};

export default Task;
