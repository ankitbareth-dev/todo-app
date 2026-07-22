import "./TodoList.css";

export default function TodoList({
  todos,
  deleteTodo,
  editTodo,
  handleToggleTodo,
}) {
  return (
    <div className="list-container">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <div className="list-item" key={todo.id}>
              <div className="left-side">
                <p className={todo.completed ? "completed" : ""}>
                  {todo.todoName}
                </p>
              </div>

              <div className="right-side">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <button className="edit-btn" onClick={() => editTodo(todo.id)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="fallback-value">No todo has been added yet</p>
      )}
    </div>
  );
}
