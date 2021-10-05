export const processMovieAPIResults = (movies:any[]) => {
    const newMovies = movies.map((movie:any) => {
        const {
            title,
            release_date,
            poster_path
        } = movie;

        return {
            title,
            release_date,
            poster_path: `http://image.tmdb.org/t/p/w500${poster_path}`
        }

    })
    console.log('Processes Movies', newMovies);
    return newMovies;
}