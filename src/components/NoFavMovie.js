import { NavLink } from 'react-router-dom';
import 'animate.css';
import fav from '../images/favorite.svg';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';

function NoFavMovie() {
    return (
        <div className="no-fav-container">
            
            <br />
            <p>You do not have any <img className="no-fav" src={fav} alt="Website Logo" /> <span className="fav-text">favourite movie </span> yet.</p> 

            <p className="add">
                Add one now 
                <NavLink to={'/'}>
                    <AiOutlineVideoCameraAdd className="icon" size={30} />
                </NavLink>
            </p>
        </div>
    )
}

export default NoFavMovie;