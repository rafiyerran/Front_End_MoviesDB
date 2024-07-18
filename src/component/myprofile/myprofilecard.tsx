
interface Props {
    profile: ResponseMyProfile;
}

const MyProfileCard = ({ profile }: Props) => {
    const { name, id, username, avatar } = profile;
    const gravatarHash = avatar.gravatar.hash;
    const avatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?s=200`;

    return (
        <div className='bg-white p-5 rounded-lg shadow-md'>
            <div className='flex items-center mb-4'>
                <img src={avatarUrl} className='w-50 h-50 rounded-full mr-4' alt='Avatar' />
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p className='text-gray-500'>{username}</p>
                </div>
            </div>
            <p>ID: {id}</p>
        </div>
    );
}

export default MyProfileCard;
