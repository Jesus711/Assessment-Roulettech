import React, { useState } from 'react';
import './Navbar.css'; // Optional: If you want to style the navbar using an external CSS file

const Navbar = () => {

    const [count, setCount] = useState(0)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Assessment-Task List</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">Create Task</a></li>
                <li><a href="/services">Task History</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
