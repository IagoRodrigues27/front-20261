import { useContext } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleEntrar = () => {
        login({ username: "jose@iesb.br", password "123456"});
        navigate("/");
    };

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleEntrar}>Entrar</button>
        </>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export default Login;