import { useState } from "react";

const Search = (props) => {
  const [state, setstate] = useState({
    task: {
      task: props.task,
      ok: props.ok,
    },
  });

  const handleTask = async (event) => {
    await setstate({ task: event.target.value });
    props.searchTask(state.task);
  };

  return (
    <form className="input">
      <input
        type="text"
        name="task"
        placeholder="Busca aqui tu tarea"
        id="input"
        onChange={handleTask}
      />
    </form>
  );
};

export default Search;
