import { useEffect, useState } from "react";

const Search = (props) => {
  console.log(props);
  const handleTask = (event) => props.searchTask(event.target.value);

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
