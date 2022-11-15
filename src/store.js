import { reactive } from `vue`

export const store = reactive ({
    moviesList: [],
    apiURL: "https://api.themoviedb.org/3/movie/550?api_key=4d580452c3bd253a25f34d068a8cd030&query=ciao";
    
})