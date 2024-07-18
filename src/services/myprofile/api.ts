import {API} from ".";

const getMyProfileData = async () => {
    try {
        const response = await API.get("/account/21384920");
        return response.data as ResponseMyProfile;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw new Error('Failed to fetch profile');
    }
};


export {getMyProfileData};