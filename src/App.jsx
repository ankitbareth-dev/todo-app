import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!inputValue.trim()) return;

    if (editingId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId ? { ...todo, todoName: inputValue } : todo,
        ),
      );

      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        todoName: inputValue,
      };

      localStorage.setItem("todos", JSON.stringify(todos));

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
  };

  return (
    <div className="app-container">
      <h2 className="title">TodoInput</h2>
      <TodoInput
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editId={editingId}
      />
      <h2 className="title">TodoList</h2>
      <div className="filter-container">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Completed</button>
        <button className="filter-btn">Pending</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <div className="delete-button-container">
        <button className="delete-task-btn">Delete done todos</button>
        <button className="delete-task-btn">Delete all todos</button>
      </div>
    </div>
  );
}

export default App;
