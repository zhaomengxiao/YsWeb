import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/register" className="nav-link">Register</Link>
        </nav>
    );
}

export default Navbar;
