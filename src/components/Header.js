import { Link } from 'react-router-dom';
import MainNav from './MainNav';

import Logo from '../logo/moogleLogo.svg';

function Header() {
    return (
        <header className="header-wrapper">
            <div className="headericon">
                <div className="blurry-effect"></div>
            </div>
            <Link to='/'><img src={ Logo } alt="Logo" className="logo" /></Link>
            <MainNav />

            <span className="sr-only"></span>
        </header>
    )
}

export default Header;