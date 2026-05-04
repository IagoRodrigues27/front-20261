import { NavLink } from "react-router";
import './Menu.css'

function Menu() {
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/perfil">Perfil</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
}

export default Menu;