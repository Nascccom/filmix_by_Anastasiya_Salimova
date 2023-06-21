import axios from "axios";


export const movieAPI = {
    getMovies() {
        return axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6a984a0078229ccc2a19cdb6fd0f5230')
          .then(res => console.log(res))
    }
}