import './moviecardstyles.css';

interface Props {
    movie: Movies;
    onClick: () => void;  
    isSelected: boolean; 
    size?: string;
}

const MovieCard = ({ movie, onClick, isSelected, size }: Props) => {
    const { title, poster_path, release_date } = movie;

    return (
        <div className={`movie-card ${size}`}>
            <button onClick={onClick}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
            </button>
            <label className='font-semibold'>{title}</label>
            <p>{release_date}</p>
            {isSelected && <p className='selected'>Selected!</p>}
        </div>
    );
}

export default MovieCard;


