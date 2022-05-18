import '../styles/TodoList.css';

const TodoList = ( props ) => {
  return (
    <section className="todo__list">
      <div className="todo__list-title">
        <h1> Your Next Tasks </h1>
      </div>

      <div className="todo__task-list">
        <ul>
          {props.children}
        </ul>
      </div>

    </section>

  )
}

export default TodoList;