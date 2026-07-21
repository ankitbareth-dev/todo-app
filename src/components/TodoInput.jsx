import "./TodoInput.css";
export default function TodoInput() {
  return (
    <div className="todo-input-container">
      <input type="text" placeholder="New Todo" />
      <button>Add new task</button>
    </div>
  );
}
