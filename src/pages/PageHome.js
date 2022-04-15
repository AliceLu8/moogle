import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/globals'; 
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';
import ScrollToTop from '../components/ScrollToTop';
import HeroSlide from '../components/HeroSlide';

const PageHome = ({ sort }) => {

  const [moviesData, setMoviesData] = useState(null);

    // Good Known Endpoint - Popular Movies
    // https://api.themoviedb.org/3/movie/popular?api_key=467ae5ff4a2ad2a532b819a080fb0e52&language=en-US&page=1

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();
            // Get the first 12 movies from the returned movies array...
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 15);
            setMoviesData(moviesDataFromAPI);
        }
        fetchMovies();
    }, [sort]);

  return (
    <section>
      <HeroSlide movies={moviesData} />
      <NavSort />
      {moviesData !== null && <Movies movies={moviesData} />}

      <div className="scroll-up">
          <ScrollToTop />
      </div>
    </section>
  )
}

export default PageHome;