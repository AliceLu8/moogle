import { NavLink } from 'react-router-dom';
import fav from '../images/favorite.svg';

function NoFavMovie() {
    return (
        <div className="no-fav-container">
            <NavLink to={'/'}>
                <img className="no-fav" src={fav} alt="Website Logo" />
            </NavLink>
            <br />
            <p>You do not have any favourite movie yet. Add one now.</p>
        </div>
    )
}

export default NoFavMovie;