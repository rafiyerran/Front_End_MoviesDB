import { useEffect, useState } from 'react';

import MyProfileCard from '../../component/myprofile/myprofilecard';
import { getMyProfileData } from '../../services/myprofile';

const MyProfile = () => {
    const [profileData, setProfileData] = useState<ResponseMyProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setIsLoading(true);
                const response = await getMyProfileData();
                setProfileData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!profileData) {
        return <div>Error: Profile data not found</div>;  
    }

    return (
        <div className='p-5'>
            <label className='text-2xl font-semibold mb-5'>My Profile</label>
            <MyProfileCard profile={profileData} />
        </div>
    );
}

export default MyProfile;
