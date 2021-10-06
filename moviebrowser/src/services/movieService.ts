import { API_KEY } from "../common/Constants/Constants";

export const getGenres = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`).then(res => res.json()).then(res => res);
    return res;
}

export const getMovies = async (pageNumber:number = 1) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`).then(res => {
        return res.json()
    }).then(res => res);
    console.log(':::getMovies:::',res);
    
    return res
}

export const getMoviesByCategory = async (categoryID:string = '1', pageNumber:number = 1) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${categoryID}&page=${pageNumber}`).then(res => res.json()).then(res => res);
    return res;
}

export const search = async (searchText: string='', currPage: number, activeGenreID: number) => {
    const query = searchText ? searchText : 'action';
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${currPage}&include_adult=false&query=${query}`
    ).then(res => res.json())
    .then(res => res);
    return res;
}

export const getMovie = (id:string) => {

}