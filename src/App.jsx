import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (!inputValue.trim()) return;

    if (isEditable) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId ? { ...todo, todoName: inputValue } : todo,
        ),
      );

      setEditingId(null);
      setIsEditable(false);
    } else {
      const newTodo = {
        id: Date.now(),
        todoName: inputValue,
      };

      setTodos((prev) => [newTodo, ...prev]);
    }

    setInputValue("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setInputValue(todo.todoName);
    setEditingId(id);
    setIsEditable(true);
  };

  return (
    <div className="app-container">
      <h2 className="title">TodoInput</h2>
      <TodoInput
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditable={isEditable}
      />
      <h2 className="title">TodoList</h2>
      <div className="filter-container">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Done</button>
        <button className="filter-btn">Completed</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <div className="delete-button-container">
        <button className="delete-task-btn">Delete done tasks</button>
        <button className="delete-task-btn">Delete all tasks</button>
      </div>
    </div>
  );
}

export default App;
