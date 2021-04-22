import { useEffect, useState } from "react";

const Edit = (props) => {
  const [task, setTask] = useState("");

  const edit = (event) => setTask(event.target.value);

  const editTask = () => props.editedTask(props.task.i, task)

  return (
    <form className="input">
      <input
        type="text"
        name="task"
        placeholder="Edita aqui tu nueva tarea"
        id="input"
        onChange={edit}
      />
      <button onClick={editTask}>Edit</button>
    </form>
  );
};

export default Edit;
