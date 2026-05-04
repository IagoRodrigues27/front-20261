import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}> {/*teamplate*/}
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        </Route>
    </Routes>
  );
}

export default App;