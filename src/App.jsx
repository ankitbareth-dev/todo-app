import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <h2 className="title">TodoInput</h2>
      <TodoInput />
      <h2 className="title">TodoList</h2>
      <div className="filter-container">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Done</button>
        <button className="filter-btn">Completed</button>
      </div>
      <TodoList />
      <div className="delete-button-container">
        <button className="delete-task-btn">Delete done tasks</button>
        <button className="delete-task-btn">Delete all tasks</button>
      </div>
    </div>
  );
}

export default App;
