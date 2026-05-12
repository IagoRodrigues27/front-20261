import { NavLink, useNavigate } from "react-router";
import './Menu.css';
import { useAuth } from "../contexts/AuthContext";


function Menu() {

    const { logout, usuario } = useAuth();
    const handleSair = (e) => {
        e.preventDefault();
        logout();
        Navigate("/login")
    }
    return (
        <nav>
            <h1>{usuario.nome}</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink></li>
                <li><NavLink to="/settings">Configurações</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/Login">Sair</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;