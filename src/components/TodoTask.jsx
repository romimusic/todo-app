
import "../styles/TodoList.css";


const TodoTask = ({ text, onComplete, onRemove }) => {

  return (
    <li>
      <p> {text} </p>
      <div className="todo__list-icons">
        <button onClick={onComplete}>
          <span className="material-icons">check_box</span>
        </button>
        <button onClick={onRemove}>
          <span className="material-icons delete">delete_forever</span>
        </button>
      </div>
    </li>
  );
};

export default TodoTask;
