import "./TodoList.css";

export default function TodoList({ todos }) {
  return (
    <div className="list-container">
      {todos.length > 0 ? (
        todos.map((ele) => {
          return (
            <div className="list-item" key={ele.id}>
              <div className="left-side">
                <p>{ele.todoName}</p>
              </div>

              <div className="right-side">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
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
