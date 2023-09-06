function Navbar() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="content">
        <img className="logo" src="/logo_verde.png" alt="T-Sho logo" />
      </div>
      <div
        className="text-light me-4 my"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p className="my-auto me-1">Profile</p>
        <img className="profile-img" src="/profile.svg" alt="profile-img"></img>
        <p className="my-auto ms-2">Logout</p>
      </div>
    </nav>
  );
}

export default Navbar;
