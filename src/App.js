import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCouter from "./components/TodoCounter";
import TodoList from "./components/TodoList";

import "../src/styles/App.css";
import TodoTask from "./components/TodoTask";


const task = [ "React", "Tailwind", "Hooks"];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoCouter />
      <TodoList>
        { task.map( (task, index) => (
          <TodoTask key={index} text={task} />
        ))}
      </TodoList>
      <Footer />
    </div>
  );
}

export default App;
