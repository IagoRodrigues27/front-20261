import avatar from '../assets/avatar.svg'

function Topbar() {
    return (
        <header>
            <img src={avatar} alt="imagem do avatar"/>
            <h1>Aluno Online</h1>
        </header>
            );
}

export default Topbar;