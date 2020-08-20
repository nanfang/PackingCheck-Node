import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import icon from "./img/new_icon.png";
import "./Layout.scss";


const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return <button className="btn btn-sm btn-outline-dark my-1 py-0"
                   onClick={() => loginWithRedirect()}>Sign In</button>;
};

const LogoutButton = () => {
    const {logout} = useAuth0();
    return (
        <button className="btn btn-sm btn-outline-dark my-1 py-0"
                onClick={() => logout({returnTo: window.location.origin})}>
            Log Out
        </button>
    );
};

const Header = (props) => {
    const {user, isAuthenticated} = useAuth0();
    const greeting = isAuthenticated ? <LogoutButton/> : <LoginButton/>;
    return (
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
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            {isAuthenticated &&
                            <li className="nav-item">
                                <a href="#" className="nav-link">{user.name}</a>
                            </li>
                            }
                            <li className="nav-item">
                                {greeting}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;