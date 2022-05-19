import "../styles/TodoList.css";

const TodoTask = ({ text }) => {
  const onComplete = () => {
    console.log("Task completed");
  };

  const onRemove = () => {
    console.log("Task removed");
  };

  return (
    <li>
      <p> {text} </p>
      <div className="todo__list-icons">
        <button onClick={onComplete}>
          <span className="material-icons">check_box</span>
        </button>
        <button onClick={onRemove}>
          <span className="material-icons">delete_forever</span>
        </button>
      </div>
    </li>
  );
};

export default TodoTask;
