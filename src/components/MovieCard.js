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
        <div className="movie-container">
            <div className="movie-card">
                <div className="movie-poster">
                    {movie.poster_path === null ? 
                        <img src={noPoster} alt="No Poster" /> :
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    }
                </div>
                    
                <div className="movie-info">
                    <div className="overview">
                        <p>{movie.overview}</p>
                    </div>
                    <div className="more-info">
                        <Link to={`/movie/${movie.id}`}>More Info</Link>
                    </div>
                    <p className="release-date">Release Date: {movie.release_date}</p>
                </div>
                
            </div>

            <h3>{movie.title}</h3>

            <div className="rate-container">
                <div className="rate-date">
                    <div className="item-rate">
                        <img className="icon" src={ Icon } alt="Icon" />
                        <p className="rate">{movie.vote_average}</p>
                    </div>
                </div>
                <div className="btn-favourite">
                        {movieFav ? 
                            <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                            <FavButton movie={movie} handleFavClick={handleFavClick} />
                        }
                    </div>
            </div>
        </div>
    )
}

export default MovieCard;
