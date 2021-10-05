export const getGenreID = (genres: any[], selectedGenre:string) => {
    const genre =  genres.find((genre:{id: number, name: string}) => {
        const { id, name } = genre;
        if(name.toLowerCase() === selectedGenre.toLowerCase()){
            return id
        }
    });
    if(genre) {
        return genre.id
    } else {
        return -1;
    }
}