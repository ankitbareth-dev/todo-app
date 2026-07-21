import { useState } from "react";
import "./TodoInput.css";
export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };
  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="New Todo"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-todo-btn" onClick={handleAddTodo}>
        Add new task
      </button>
    </div>
  );
}
