import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Aniket.dev</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#why">Why This</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
