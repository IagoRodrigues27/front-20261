import Card from "./Card";
import Topbar from "./topbar";

function Main() {
    return (
        <main className="flex flex-col max-h-screen">
            <Topbar />
            <h2>Bem-vindo ao portal do aluno</h2>
            <Card />
        </main>
    );
}

export default Main;