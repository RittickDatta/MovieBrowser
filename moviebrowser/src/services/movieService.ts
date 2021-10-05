export const getGenres = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=444ac925120d16acbc19fcc545c05ec2&language=en-US').then(res => res.json()).then(res => res);
    return res;
}

export const getMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=444ac925120d16acbc19fcc545c05ec2&language=en-US&page=1').then(res => {
        return res.json()
    }).then(res => res);
    console.log(':::getMovies:::',res);
    
    return res
}

export const getMoviesByCategory = async (categoryID:string) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=444ac925120d16acbc19fcc545c05ec2&with_genres=${categoryID}`).then(res => res.json()).then(res => res);
    return res;
}

export const search = (searchText: string) => {

}

export const getMovie = (id:string) => {

}