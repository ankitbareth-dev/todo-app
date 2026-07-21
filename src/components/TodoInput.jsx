import { useState } from "react";
import "./TodoInput.css";
export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="New Todo"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-todo-btn" onClick={() => addTodo(inputValue)}>
        Add new task
      </button>
    </div>
  );
}
