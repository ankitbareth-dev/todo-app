import { useForm } from "react-hook-form";
import { FiCheckSquare, FiLogIn } from "react-icons/fi";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    const users = JSON.parse(localStorage.getItem("users")) || {};
    const exisitingUser = users[email];

    if (!exisitingUser) {
      users[email] = {
        password,
        todos: [],
      };
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      if (exisitingUser.password !== password) {
        alert("password is not correct");
        return;
      }
    }
    localStorage.setItem("currentUser", email);
    navigate("/");
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-brand">
          <FiCheckSquare size={32} />
          <h1>Task Manager</h1>
        </div>

        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={errors.email ? "input-error" : ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="login-btn">
          <FiLogIn /> Login
        </button>
      </form>
    </div>
  );
}
