import { reactive } from `vue`

export const store = reactive ({
    movies: [],
    series: [],
    apiURL: "https://api.themoviedb.org/3/search",
    apiKey:  "4d580452c3bd253a25f34d068a8cd030",
    searchKey: "",
})
