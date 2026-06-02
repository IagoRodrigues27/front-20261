import avatar from '../assets/avatar.svg'

function Topbar() {
    return (
        <header>
            <hgroup>
                <h1>Olá, Aluno!</h1>
                <p>Bem-vindo ao portal do aluno</p>
            </hgroup>
            <figure>
                <img src={avatar} alt="Usuário" />
            </figure>
        </header>
    );
}

export default Topbar;