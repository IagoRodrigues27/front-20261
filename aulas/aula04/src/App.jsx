import { useContext } from "react";
import { Routes, Route } from "react-router";
import { useAuth } from "./contexts/AuthContext";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Erro404 from "./pages/Erro404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";

function App() {
  const { logado } = useContext(AuthContext);
  return (
    <Routes>
      {logado ? (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="perfil/:id" element={<Perfil />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes >
  );
}
export default App;