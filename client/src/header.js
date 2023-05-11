import { Link } from "react-router-dom";

export default function Header(){
    return (
    <header>
        <Link to="/" className="logo">Termite</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
          
        </nav>
      </header>
    );
}