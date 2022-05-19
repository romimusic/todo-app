import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import Modal from "./modal";

import "../src/styles/App.css";
import TodoTask from "./components/TodoTask";
import CreateTodo from "./components/CreateTodo";


function App() {
  const localStorageTasks = localStorage.getItem("ALLTASKS_V1");
  let parsedTasks;

  if (!localStorageTasks) {
    localStorage.setItem("ALLTASKS_V1", JSON.stringify([]));
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const [tasksValues, setTasksValues] = useState(parsedTasks);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const tasksCompleted = tasksValues.filter((task) => task.completed).length;
  const allTasks = tasksValues.length;

  let filteredTask = [];

  // Filter tasks by search value
  if (!searchValue.length >= 1) {
    filteredTask = tasksValues;
  } else {
    filteredTask = tasksValues.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  // Completing task
  const completeTask = (text) => {
    const newTasks = tasksValues.map((task) => {
      if (task.text === text) {
        return { ...task, completed: true };
      }
      return task;
    });
    localStorage.setItem("ALLTASKS_V1", JSON.stringify(newTasks));
    setTasksValues(newTasks);
  };

  // Removing task
  const removeTask = (text) => {
    const newTasks = tasksValues.filter((task) => task.text !== text);
    setTasksValues(newTasks);
    localStorage.setItem("ALLTASKS_V1", JSON.stringify(newTasks));
  };

  // Adding task
  const addTask = (text) => {
    const newTasks = [...tasksValues];
    newTasks.push({ text, completed: false });
    setTasksValues(newTasks);
    localStorage.setItem("ALLTASKS_V1", JSON.stringify(newTasks));
  };

  return (
    <div className="App">
      <Header />
      <TodoCounter
        completed={tasksCompleted}
        alls={allTasks}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {filteredTask.map((task, index) => (
          <TodoTask
            key={index}
            text={task.text}
            onComplete={() => completeTask(task.text)}
            onRemove={() => removeTask(task.text)}
          />
        ))}
      </TodoList>

      {showModal && (
        <Modal>
          <CreateTodo setShowModal={setShowModal} addTask={addTask} />
        </Modal>
      )}

      <Footer setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

export default App;
