import { useEffect, useState } from "react";

const Search = (props) => {
  const [state, setState] = useState({ task: "" })

  const handleTask = async (event) => {
    await setState({ task: event.target.value });
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
