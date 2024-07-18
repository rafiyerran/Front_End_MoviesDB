import {API} from ".";

const getTvShowsPlaying = async (page: string) => {
    try {
        const response = await API.get(`/tv/top_rated?language=en-US&page=${page}`)
        
        console.log(response)

        return response.data as ResponseTvShows;
    } catch (error) {
        console.log(error)
    }
}


export {getTvShowsPlaying};