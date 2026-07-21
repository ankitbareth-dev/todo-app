import "./TodoList.css";

const dummyData = [
  {
    id: 1,
    name: "Learn React Js basics",
  },
  {
    id: 2,
    name: "Practice React Js",
  },
  {
    id: 3,
    name: "Learn Redux",
  },
  {
    id: 4,
    name: "Code portfolio in React",
  },
  {
    id: 5,
    name: "Learn React Native",
  },
];

export default function TodoList() {
  return (
    <div className="list-container">
      {dummyData.map((ele) => {
        return (
          <div className="list-item" key={ele.id}>
            <div className="left-side">
              <p>{ele.name}</p>
            </div>
            <div className="right-side">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
