import '../styles/TodoSearch.css';

const TodoSearch = () => {
  return (
    <section className="todo__search">
      <form>
        <input type="text" placeholder="Search" />
        <button type="button"> Search </button>
      </form>
    </section>
  )
}

export default TodoSearch;