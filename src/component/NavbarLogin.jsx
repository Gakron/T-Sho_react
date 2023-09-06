import { useNavigate } from "react-router-dom";

function NavbarLogin() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="content">
        <img
          className="logo"
          src="/logo_verde.png"
          alt="T-Sho logo"
          onClick={handleLogoClick}
        />
      </div>
      <div className="text-light me-4">
        <button
          type="button"
          className="btn signin  my-auto me-1"
          onClick={handleLoginButtonClick}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavbarLogin;
