import '../App.css';

function NavBar() {
    return(
        <header className="menu">
            <p id="marginName">SimGarage Simuladores</p>
            <nav id="marginMenu">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                    <a className="nav-link texto" href="">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link texto" href="">Nosostros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link texto" href="">Contacto</a>
                    </li>
                </ul>
            </nav>  
        </header>
    );
};

export default NavBar;