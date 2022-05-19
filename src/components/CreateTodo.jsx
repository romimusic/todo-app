import { useRef } from "react";
import '../styles/CreateTodo.css';

const CreateTodo = ({ setShowModal, addTask }) => {
  const newTask = useRef();

  const handleSubmit = () => {
    const text = newTask.current.value;
    if (text.length > 0) {
      addTask(text);
      newTask.current.value = '';
    }
    setShowModal(false);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="create__todo">
      <h2> Create a New Task! 😆 </h2>
      <form>
        <input ref={newTask} type="text" placeholder="Add a task" required />
        <div className="create__todo-buttons">
          <button
            onClick={closeModal}
            className="secondary__button"
            type="button"
          >
            Cancel
          </button>
          <button onClick={handleSubmit} className="primary__button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;