export const getGenreList = (genres:{id:number, name:string}[]) => {
    const genreNames =  genres.map((genre) => genre.name);
    const genreIDs = genres.map((genre) => genre.id);
    return {
        genreNames,
        genreIDs
    }
}