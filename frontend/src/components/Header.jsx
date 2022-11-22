import React from "react";
import { NavLink } from "react-router-dom";
import AtlantisLogo from "../assets/logos/logo_header.png";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={AtlantisLogo} alt="Logo d'Atlantis" />
                <h1>Atlantis</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "accueil_navbar active"
                                    : "accueil_navbar"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/recrew"
                            className={({ isActive }) =>
                                isActive
                                    ? "recrew_navbar active"
                                    : "recrew_navbar"
                            }
                        >
                            Recrutement
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
