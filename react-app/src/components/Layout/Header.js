import icon from "./img/new_icon.png";
import React from "react";
import "./Layout.scss";

export const Header = (props) => (
    <header>
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">
                    <img src={icon} className="img-fluid mr-2 py-2" alt="Packing Check"/>
                    Packing Check
                </a>
                <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="index.html" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Sign In
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn btn-sm btn-outline-dark my-1 py-0">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;