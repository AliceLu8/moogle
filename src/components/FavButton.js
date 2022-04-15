import fav from '../images/unfavorite.svg';
import unfav from '../images/favorite.svg';

function FavButton( { movie, remove, handleFavClick }) {
    function handleAddFav() {
        handleFavClick(true, movie);
    }

    function handleRemoveFav() {
        handleFavClick(false, movie);
    }

    return (
        <>
            {remove === false ? 
            <div className="fav-btn" ><img onClick={handleAddFav} src={ fav } alt="Solid heart"/></div> : 
            <div className="fav-btn"><img onClick={handleRemoveFav}src={ unfav } alt="Empty heart"/></div>}
        </>
    );
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;