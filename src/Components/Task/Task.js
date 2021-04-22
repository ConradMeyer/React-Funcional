import { useState } from "react";

const Task = (props) => {
  const [state, setstate] = useState({
    task: {
      task: props.task,
      ok: props.ok,
    },
  });

  const componentWillUnmount = () => {
    //...
  };

  const edit = (event) => setstate({ task: event.target.value });

  const delet = () => props.delete(props.index);

  const editTask = () => props.editTask(props.index, state.task);

  const check = () => props.checkTask(props.index);

  return (
    <article className={`${props.ok}`}>
      <input type="checkbox" name="check" id="check" onClick={check} />
      <h3>{props.task}</h3>
      <input type="text" placeholder="Edita tu tarea" onChange={edit} />
      <div className="botones">
        <button onClick={editTask}>Edit</button>
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
