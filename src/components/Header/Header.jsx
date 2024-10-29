import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="flex items-center text-center justify-between mb-16">
            <h2 className="text-2xl">Navbar</h2>
            <nav className="space-x-6 text-lg bg-red-300 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;