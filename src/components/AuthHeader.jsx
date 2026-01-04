import "../styles/authHeader.css";

const AuthHeader = ({ onLogout }) => {
  return (
    <header className="auth-header">
      <span className="brand">Admin Panel</span>

      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </header>
  );
};

export default AuthHeader;
