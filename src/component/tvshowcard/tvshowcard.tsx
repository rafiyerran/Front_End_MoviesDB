
import './tvshowscardstyles.css';

interface Props {
    tvshows: TvShows;
    onClick: () => void;
    isSelected: boolean;
    size?: string;
}

const TvShowsCard = ({ tvshows, onClick, isSelected, size }: Props) => {
    const { name, poster_path, first_air_date } = tvshows;

    return (
        <div className={`flex flex-col tv-shows-card ${size}`}>
            <button onClick={onClick}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={name} />
            </button>
            <label className='font-semibold'>{name}</label>
            <p>{first_air_date}</p>
            {isSelected && <p>Selected!</p>}
        </div>
    );
}

export default TvShowsCard;