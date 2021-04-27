import { useEffect, useState, useContext } from "react";
import Form from "../Form/Form";
import Task from "../Task/Task";
import Edit from "../Edit/Edit";
import getTasks from "../../Data/dataProvider";
import Search from "../Search/Search";
import AuthContext from "../../contexts/AuthContext";

const Main = (props) => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState([{}]);
  const [filterText, setFilterText] = useState("");
  const [newTask, setNewTask] = useState(true);
  const [editTask, setEditTask] = useState(false);
  const [toEdit, setToEdit] = useState({});
  const dataContext = useContext(AuthContext);

  // Primera renderización (Poner la mesa)
  // useEffect(() => {
  //   async function loadTasks() {
  //     const newTasks = await getTasks();
  //     setTasks([...tasks, ...newTasks]);
  //   }
  //   loadTasks();
  // }, []);

  // CON FETCH Y BACK (peticion de datos a backend)
  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await fetch("http://localhost:8080/data");
        const result = await res.json();
        setData([...data, ...result]);
        setTasks([...tasks, ...result]);
      } catch (e) {
        const newTasks = await getTasks();
        setTasks([...tasks, ...newTasks]);
      }
    }
    loadTasks();
  }, []);

  // Cambios en una constante en particular
  // useEffect(() => {
  // console.log("Ha cambios en las tasks")
  // }, [tasks]);

  const drawTasks = () => {
    if (tasks.length > 0) {
      return tasks
        .filter((item) =>
          item.task.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((item, index) => (
          <Task
            task={item.task}
            index={index}
            ok={item.ok}
            prior={item.prior}
            delete={deleteTask}
            checkTask={checkTask}
            changeEdit={changeEdit}
            changePrior={changePrior}
            key={index}
          />
        ));
    } else if (data.length === 1) {
      return <h3>Cargando...</h3>;
    }
    return <h3>No hay tareas</h3>;
  };

  const addTask = (task) => {
    setTasks([...tasks, { task }]);
  };

  const editedTask = (i, input) => {
    const editedTask = [...tasks];
    editedTask[i].task = input;
    setTasks(editedTask);
    setEditTask(!editTask);
  };

  const deleteTask = (i) => {
    let newTasks = tasks.filter((el, index) => index !== i);
    setTasks(newTasks);
  };

  const checkTask = (i) => {
    const checkTask = [...tasks];
    checkTask[i].ok = !checkTask[i].ok;
    setTasks(checkTask);
  };

  const changePrior = (i, prior) => {
    const priorTask = [...tasks];
    priorTask[i].prior = prior;
    setTasks(priorTask);
  };

  const searchTask = (text) => setFilterText(text);

  const change = () => setNewTask(!newTask);

  const changeEdit = (i, text) => {
    setEditTask(!editTask);
    setToEdit({ i, text });
  };

  if (dataContext.auth) {
    if (!editTask) {
      return (
        <main className="main">
          {newTask ? (
            <Form addTask={addTask} />
          ) : (
            <Search searchTask={searchTask} />
          )}
          <button className="newTask" onClick={change}>
            Search/Create
          </button>
          <h2 className="tareas">TAREAS:</h2>
          {drawTasks()}
        </main>
      );
    } else {
      return (
        <main className="main">
          <Edit task={toEdit} editedTask={editedTask} />
          <button className="newTask" onClick={change}>
            Search/Create
          </button>
          <h2 className="tareas">TAREAS:</h2>
          {drawTasks()}
        </main>
      );
    }
  } else {
    return (
      <main className="main">
        <h2 className="tareas">TAREAS:</h2>
        {drawTasks()}
      </main>
    );
  }
};

export default Main;