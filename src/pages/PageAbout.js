import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import TLogo from '../images/tmdbLogo.svg';

function PageAbout() {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <section className="about-page">
            <p>Moogle is a movie database website where you can find the popular, top rated, now playing and coming soon movies. You will find your favourite movies and watch them in high-quality resolution. Our website allows you to add the movies you like to your favourites.</p>
            <img src={ TLogo } alt="tmdbLogo" className='tmdblogo'/>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDbbase.</p>
        </section>
    )
}

export default PageAbout;