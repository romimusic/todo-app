import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";

import "../src/styles/App.css";
import TodoTask from "./components/TodoTask";

const arrayTask = [
  {
    text: "React",
    completed: true,
  },
  {
    text: "Tailwind",
    completed: false,
  },
  {
    text: "Hooks",
    completed: false,
  },
  {
    text: "Patience",
    completed: false,
  },
];

function App() {
  const [tasksValues, setTasksValues] = useState(arrayTask);
  const [searchValue, setSearchValue] = useState("");

  const tasksCompleted = tasksValues.filter((task) => task.completed).length;
  const allTasks = tasksValues.length;

  let filteredTask = [];

  if (!searchValue.length >= 1) {
    filteredTask = tasksValues;
  } else {
    filteredTask = tasksValues.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

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
          <TodoTask key={index} text={task.text} />
        ))}
      </TodoList>
      <Footer />
    </div>
  );
}

export default App;
