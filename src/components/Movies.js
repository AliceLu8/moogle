import MovieCard from "./MovieCard"

function Movies({ movies, isFav }) {
    return (
        <section>
            {isFav ?
                <div className="movies-container">
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} isFav={true}/> )}
                </div> :
                <div className="movies-container">
                    {movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} />
                    })}
                </div>
            }
        </section>
    )
}

export default Movies;
