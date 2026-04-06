import Card from "./Card";
import Topbar from "./topbar";

function Main() {
    return (
        <main className="flex flex-col max-h-screen">
            <Topbar />
            <h1>Olá, Aluno!</h1>
            <p>Bem-vindo ao portal do aluno</p>
            <Card />
        </main>
    );
}

export default Main;