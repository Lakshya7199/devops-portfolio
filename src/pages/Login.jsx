import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Admin" && password === "MasterAdmin@13") {
      localStorage.setItem("isAuthenticated", "true");
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
      </button>

      <motion.form
        className="login-card"
        onSubmit={handleSubmit}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Avatar */}
        <div className="avatar">🧑‍💼</div>

        <h2>Welcome Lakshya</h2>
        <p className="subtitle">Sign in to continue</p>

        {/* Username */}
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder=" "
          />
          <label>Username</label>
        </div>

        {/* Password */}
        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label>Password</label>

          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
        >
          Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Login;
