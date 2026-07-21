import "./TodoInput.css";
export default function TodoInput() {
  return (
    <div className="todo-input-container">
      <input type="text" placeholder="New Todo" className="todo-input" />
      <button className="add-todo-btn">Add new task</button>
    </div>
  );
}
