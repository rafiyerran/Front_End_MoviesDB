import './topmoviecardstyles.css';

interface Props {
    movie: TopMovies;
    onClick: () => void;  
    isSelected: boolean; 
    size?: string;
}

const TopMovieCard = ({ movie, onClick, isSelected, size }: Props) => {
    const { title, poster_path, release_date, vote_average } = movie;

    return (
        <div className={`flex flex-col ${size} top-movie-card`}>{/* ini mengatur border tiap movie card sesuaikan dengan file .css nya juga*/}
            <button onClick={onClick}>
                {/* ini mengatur image tiap movie sebagai button sehingga bisa di klik sesuaikan dengan file .css nya juga*/}
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
            </button>
            <label className='font-semibold'>{/* ini mengatur judul tiap movie sesuaikan dengan file .css nya juga*/}{title}</label>
            <label className='font-semibold'>{/* ini mengatur rating tiap movie sesuaikan dengan file .css nya juga */}Rating : {vote_average}</label>
            <p className='release-date'>{/* ini mengatur release-date tiap movies esuaikan dengan file .css nya juga*/}{release_date}</p>
            {isSelected && <p className='selected'>Selected!</p>}
        </div>
    );
}

export default TopMovieCard;
