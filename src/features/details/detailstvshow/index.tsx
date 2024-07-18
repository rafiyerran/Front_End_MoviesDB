import '../detailstvshow/detailstvshowstyle.css';

interface Props {
    tvshows: TvShows;
    onClose: () => void;
}

const DetailsTvShow = ({ tvshows, onClose }: Props) => {
    const { name, overview, popularity, poster_path, backdrop_path } = tvshows;

    return (
        <div className='behind-background-tvshows'>
            <button
                className='details-background-tvshows'
                onClick={onClose}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        onClose();
                    }
                }}
                aria-label='Close'
            ></button>
            <div
                className='image-background-tvshows'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                }}
            >
                <div className='details-info-tvshows'>
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                        className='poster'
                        alt={name}
                    />
                    <label className='title-movie-tvshows'>{name}</label>
                    <p className='overview-tvshows'>{overview}</p>
                    <p className='popularity-tvshows'>Popularity: {popularity}</p>
                    <button
                        className='close-button-tvshows'
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailsTvShow;
