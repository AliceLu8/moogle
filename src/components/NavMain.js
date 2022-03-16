import { NavLink } from 'react-router-dom';

function NavMain({ handleShowHideNav }) {

    function closeNav(e) {
        if(window.innerWidth < 600){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/favs">Favourite</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMain;
