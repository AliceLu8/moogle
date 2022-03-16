import Movies from '../components/Movies';
import { useState, useEffect } from 'react';
import NoFavMovie from '../components/NoFavMovie';
import { appStorageName } from '../globals/globals';
import { appTitle } from '../globals/globals';

function PageFavs() {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        let favsStorage = localStorage.getItem(appStorageName);
        document.title = `${appTitle} - Home`;
        if(favsStorage !==null){
            favsStorage = JSON.parse(favsStorage);
            setMoviesData(favsStorage);
            return;
        }

    }, []);

    return (
        <main>
            <section className="favs-page">
                <h2>Favourite Page</h2>

                {/* {moviesData !== null && moviesData.length > 0 ?
                    <Movies movies={moviesData} /> : <NoFavMovie /> } */}
                    {moviesData !== null && moviesData.length > 0 ?
                    <Movies movies={moviesData} /> : <NoFavMovie /> }
            </section>
        </main>
    )
}

export default PageFavs;
