import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSignupButton = () => {
    navigate("/register");
  };

  return (
    <div className="form-login" id="form_login">
      <h2>Login</h2>
      <form>
        <div className="form-input">
          <input id="lgn_email" type="text" required />
          <label>Username</label>
        </div>
        <div className="form-input">
          <input id="lgn_password" type="password" required />
          <label>Password</label>
        </div>
        <button id="btn-login" type="submit">
          Login
        </button>
        <div className="form-help">
          <div className="remember-me"></div>
          <a href="#">Help</a>
        </div>
      </form>
      <p>
        Not yet one of us? <a onClick={handleSignupButton}>Sign up</a>
      </p>
    </div>
  );
}

export default LoginForm;
