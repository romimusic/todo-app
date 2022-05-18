import "../styles/TodoList.css";

const TodoTask = ({ text }) => {
  return (
    <li>
      <p> {text} </p>
      <div className="todo__list-icons">
        <span className="material-icons">check_box</span>
        <span className="material-icons">delete_forever</span>
      </div>
      
    </li>
  );
};

export default TodoTask;
