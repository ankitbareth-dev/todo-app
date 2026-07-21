import "./TodoList.css";

export default function TodoList({ todos, deleteTodo, editTodo }) {

  return (
    <div className="list-container">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <div className="list-item" key={todo.id}>
              <div className="left-side">
                <p>{todo.todoName}</p>
              </div>

              <div className="right-side">
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
