import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Lakshya</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
