import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function MainNav() {

    const [icon, setIcon] = useState(faBars);

    function blur(e){
        e.target.blur();
    }

    function handleClick(){
        if(icon === faBars){
            setIcon(faTimes);
            document.body.classList.add('show');
        }else{
            setIcon(faBars);
            document.body.classList.remove('show');
        }    
    }

    function handleNavClick(){
        document.body.classList.remove('show');
        setIcon(faBars);
    }

    return (
        <div onClick={handleClick} className="hamburger-icon">
            <div className="menu-btn" onClick={handleClick}>
                <FontAwesomeIcon icon={icon} size="2x" />
            </div>

            <nav onBlur={blur} className="nav-main" onClick={handleNavClick}>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink></li>
                    <li><NavLink to="/favs" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Favourite</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav; 