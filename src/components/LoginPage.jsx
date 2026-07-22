import { FiCheckSquare, FiLogIn } from "react-icons/fi";
import "./LoginPage.css";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-brand">
          <FiCheckSquare size={32} />
          <h1>Task Manager</h1>
        </div>

        <div className="login-input-group">
          <label htmlFor="userId">User ID</label>
          <input id="userId" type="text" placeholder="Enter your ID" required />
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          <FiLogIn /> Login
        </button>
      </form>
    </div>
  );
}
