import '../styles/TodoSearch.css';
import TodoSearch from './TodoSearch';

const TodoCouter = () => {
  return (
    <div className='float__container'>
      <section className="todo__counter">
        <h2> You've completed 3 of 5 task </h2>
        <TodoSearch />
      </section>
      
    </div>
  )
}

export default TodoCouter;