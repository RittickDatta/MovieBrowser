export const processMovieAPIResults = (movies:any[]) => {
    
    const newMovies = movies && movies.map((movie:any) => {
        const {
            id,
            title,
            release_date,
            poster_path
        } = movie;

        return {
            id,
            title,
            release_date,
            poster_path: `http://image.tmdb.org/t/p/w500${poster_path}`
        }

    })
    console.log('Processes Movies', newMovies);
    return newMovies;
}