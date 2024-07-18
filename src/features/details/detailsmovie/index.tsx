import '../detailsmovie/detailsmoviestyles.css';

interface Props {
    movie: Movies;
    onClose: () => void;
}

const Details = ({ movie, onClose }: Props) => {
    const { title, overview, popularity, poster_path, backdrop_path, } = movie;

    return (
        <div className='behind-background-movie'>
            <button
                className='details-background-movie'
                onClick={onClose}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        onClose();
                    }
                }}
                aria-label='Close'
            ></button>
            <div
                className='image-background-movie'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
                }}
            >
                <div className='details-info-movie'>
                    <label className='title-movie'>{title}</label>
                    <p className='overview-movie'>{overview}</p>
                    <p>Popularity: {popularity}</p>
                    <button
                        className='close-button-movie'
                        onClick={onClose}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                onClose();
                            }
                        }}
                    >
                        Close
                    </button>
                </div>
                <img
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    className='img-container-movie'
                />
            </div>
        </div>
    );
}

export default Details;
