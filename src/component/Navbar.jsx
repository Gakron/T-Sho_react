import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
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
    </nav>
  );
}

export default Navbar;
