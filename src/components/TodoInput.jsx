import "./TodoInput.css";
export default function TodoInput({
  addTodo,
  inputValue,
  setInputValue,
  isEditable,
}) {
  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="New Todo"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-todo-btn" onClick={addTodo}>
        {isEditable ? <p>Update Todo</p> : <p>Add new todo</p>}
      </button>
    </div>
  );
}
