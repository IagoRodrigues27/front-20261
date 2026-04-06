import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
    return (
        <aside className='hidden md:block'>
            <header className="flex flex-row">
                <hgroup>
                    <h1>Olá, Aluno!</h1>
                    <p>Bem-vindo ao portal do aluno</p>
                </hgroup>
                <figure>
                    <img src={logo} alt="imagem da logo" />
                </figure>
            </header>
            <Menu />
        </aside>
    );
}

export default Sidebar;