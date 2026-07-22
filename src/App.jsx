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
  const [activeTab, setActiveTab] = useState("All");

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
        completed: false,
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
    console.log(todo);
    if (todo.completed) {
      setInputValue("");
      return;
    } else {
      setInputValue(todo.todoName);
    }

    setEditingId(id);
  };

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = (() => {
    switch (activeTab) {
      case "completed":
        return todos.filter((todo) => todo.completed);

      case "pending":
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  })();

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
        <button className="filter-btn" onClick={() => handleTabs("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => handleTabs("completed")}>
          Completed
        </button>
        <button className="filter-btn" onClick={() => handleTabs("pending")}>
          Pending
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        handleToggleTodo={handleToggleTodo}
      />
      <div className="delete-button-container">
        <button className="delete-task-btn">Delete done todos</button>
        <button className="delete-task-btn">Delete all todos</button>
      </div>
    </div>
  );
}

export default App;
