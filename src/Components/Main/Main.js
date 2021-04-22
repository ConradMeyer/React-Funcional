import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Task from "../Task/Task";
import getTasks from "../../Data/dataProvider";
import Search from "../Search/Search";

const Main = (props) => {
  const [state, setstate] = useState({
    tasks: [],
    filterText: "",
    newTask: false,
  });

  useEffect(() => {
    async function loadTasks() {
      const tasks = await getTasks();
      setstate({ tasks: [...state.tasks, ...tasks] });
    }

    loadTasks();
  }, []);

  const drawTasks = () => {
    if (state.tasks.length > 0) {
      return state.tasks
        .filter((item) =>
          item.task.toLowerCase().includes(state.filterText.toLowerCase())
        )
        .map((item, index) => (
          <Task
            task={item.task}
            index={index}
            ok={item.ok}
            delete={deleteTask}
            editTask={editTask}
            checkTask={checkTask}
            key={index}
          />
        ));
    }
    return <h3>No hay tareas pendientes</h3>;
  };

  const addTask = (task) => {
    setstate({
      tasks: [...state.tasks, { task }],
    });
  };

  const editTask = (i, input) => {
    const editTask = [...state.tasks];
    editTask[i].task = input;
    setstate({ tasks: editTask });
  };

  const deleteTask = (i) => {
    let tasks = state.tasks.filter((el, index) => index !== i);
    setstate({
      tasks: tasks,
    });
  };

  const checkTask = (i) => {
    const checkTask = [...state.tasks];
    checkTask[i].ok = !checkTask[i].ok;
    this.setstate({ tasks: checkTask });
  };

  const searchTask = (text) => {
    setstate({ filterText: text });
  };

  const change = () => {
    const newTask = !state.newTask;
    setstate({ newTask: newTask });
  };

  return (
    <main className="main">
      {state.newTask ? (
        <Form addTask={addTask} searchTask={searchTask} />
      ) : (
        <Search addTask={addTask} searchTask={searchTask} />
      )}
      <button className="newTask" onClick={change}>
        Search/Create
      </button>
      <h2 className="tareas">TAREAS:</h2>
      {drawTasks()}
    </main>
  );
};

export default Main;
