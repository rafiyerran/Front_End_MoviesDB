import {API} from ".";

const getTopMoviesPlaying = async (page: string) => {
    try {
        const response = await API.get(`/movie/top_rated?language=en-US&page=${page}`)
        
        console.log(response)

        return response.data as ResponseTopMovies;
    } catch (error) {
        console.log(error)
    }
}

export {getTopMoviesPlaying};