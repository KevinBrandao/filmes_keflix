import axios from "axios";

//https://api.themoviedb.org/3/movie/550?api_key=f05896c269dd9568409087f15e68c11f

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;
