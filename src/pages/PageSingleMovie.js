import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav } from '../utilities/storage';
import Icon from '../images/icon.svg';

function PageSingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [movieFav, setMovieFav] = useState(null);

    // https://api.themoviedb.org/3/movie/438695?api_key=467ae5ff4a2ad2a532b819a080fb0e52&language=en-US

    useEffect(() => {
        
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            const movieDataFromAPI = await res.json();
            setMovieFav(isFav(movieDataFromAPI.id));
            setMovie(movieDataFromAPI);
        }
        
        getMovie();

    }, [id])

    function handleFavClick(fav) {
        if(fav === true) {
            addToFav(movie)
            setMovieFav(true);
        }else {
            deleteFav(movie);
            setMovieFav(false);
        }
    }


    return (
        <section className="page-single-movie">

            {movie !== null && 
                <>
                    <div className="backdrop-container">
                        {movie.backdrop_path === null ?
                            <img src={noPoster} alt="No Poster" className="backdrop-img" /> :
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="backdrop-img" />
                        }
                    </div>
                    <section className="item-single-movie">
                        
                        <div className="movie-poster">
                            {movie.backdrop_path === null ?
                                <img src={noPoster} alt="No Poster" /> :
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                            }
                            <div className="fav-btn">
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

                        <div className="single-summary">
                            {movie !== null && <h2>{movie.title}</h2>}
                            
                            <div className="summary-container">
                                {movie !== null && 
                                <p className="fav-release-date"><strong className="release-title">Release Date: </strong>{movie.release_date}</p>}
                                <p className="fav-overview"><strong>Movie Overview: </strong></p>
                                {movie !== null && <p>{movie.overview}</p>}

                                <div className = 'genres'>
                                    {movie.genres.map((tag, i) => <div key={i} className = "tag"> {tag.name}</div>)}
                                </div>
                            </div>

                        </div>
                    </section>
                </>
            }
        </section>
    )
}

export default PageSingleMovie;
