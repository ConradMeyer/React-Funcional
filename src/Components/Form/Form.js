import { useEffect, useState } from "react";

const Form = (props) => {
  const [state, setState] = useState({ task: props.task});

  const handleTask = (event) => setState({ task: event.target.value })

  const handleNewTask = (event) => {
    event.preventDefault();
    props.addTask(state.task);
  };

  return (
    <form className="input">
      <input
        type="text"
        name="task"
        placeholder="Escribe aqui tu nueva tarea"
        id="input"
        onChange={handleTask}
      />
      <button onClick={handleNewTask}>New</button>
    </form>
  );
};

export default Form;
