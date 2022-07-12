import logo from '../../assets/img/Logo.svg';

import './styles.css'

function Header() {
    return(
        <>
            <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por Yan Silva de Oliveira</p>
            </div>
            </header>
        </>
    )
};

export default Header;