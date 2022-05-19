import "../styles/TodoCounter.css";

const TodoCounter = ({
  completed,
  alls,
  searchValue,
  setSearchValue,
}) => {
  const searchValueChanged = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="float__container">
      <section className="todo__counter">
        <h2>
          You've completed {completed} of {alls} tasks
        </h2>
        <section className="todo__search">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={searchValueChanged}
          />
        </section>
      </section>
    </div>
  );
};

export default TodoCounter;
