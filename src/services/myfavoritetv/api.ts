import {API} from ".";

const getMyFavoriteTv = async (page : string) => {
    try {
        const response = await API.get(`/account/21384920/favorite/tv?language=en-US&page=${page}&sort_by=created_at.asc`)
        
        console.log(response)

        return response.data as ResponseTvShows;
    } catch (error) {
        console.log(error)
    }
}

export {getMyFavoriteTv};