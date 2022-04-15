import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav  } from '../utilities/storage';
import Icon from '../images/icon.svg';

function MovieCard({ movie }) {

    const [movieFav, setMovieFav] = useState(isFav(movie.id));

    useEffect(() => {
        isFav(movie.id);
    }, [movie.id])

    function handleFavClick(fav){
        if(fav === true){
            addToFav(movie)
            setMovieFav(true);
        }else{
            deleteFav(movie);
            setMovieFav(false);
        }  
    }

    return (
        <div className="movie-card fav-movie">
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src = {noPoster} alt = "No poster available." /> : 
                    <img key={movie.id} src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt = {movie.title} />
                }    
            </div>

            <h3>{movie.title}</h3>
            
            <div className="rate-date">
                <img className="icon" src={ Icon } alt="Icon" />    
                <p className="rate"> {movie.vote_average}</p>
            </div>

            <div className="movie-info fav-info">
                <div className="overview">
                        <p>{movie.overview}</p>
                </div>
                <Link to={`/movie/${movie.id}` }>
                    <div className="more-info">More Info</div>
                </Link>
                <p className="release-date">Release Date: {movie.release_date}</p>
            </div>
            
            <div className="btn-favourite">
                {movieFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    )
}

export default MovieCard;