import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import "./styles.css";

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="lea3game-nav-content">
                    <h1>LEA3Game</h1>
                    <a href="https://github.com/edivan-car"></a>
                    <div className="lea3game-contact-cointainer">
                        <GithubIcon />
                        <p className="lea3game-contact-link">/edivan-car</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;