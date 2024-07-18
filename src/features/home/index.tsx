import { useEffect, useState } from 'react';

import Details from '../details/detailsmovie';
import MovieCard from '../../component/moviecard/moviecard';
import { getNowPlaying } from '../../services/home';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

const Home = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const initialPage = query.get("page") ? parseInt(query.get("page") as string) : 1;

    const [isLoading, setIsLoading] = useState(false);
    const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();
    const [page, setPage] = useState<number>(initialPage);
    const [selectedMovie, setSelectedMovie] = useState<Movies | null>(null);
    const [totalPages, setTotalPages] = useState<number>(216); 

    useEffect(() => {
        fetchMovie();
    }, [page]);

    const fetchMovie = async () => {
        try {
            setIsLoading(true);
            const response = await getNowPlaying(page.toString());
            setNowPlayingData(response);
            setTotalPages(response?.total_pages || 216);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    }

    const handlePage = (increment: number) => {
        const nextPage = page + increment;
        setPage(nextPage);
        navigate(`?page=${nextPage}`);
    }

    const handleMovieClick = (movie: Movies) => {
        setSelectedMovie(movie);
    }

    const handleCloseDetails = () => {
        setSelectedMovie(null);
    }

    return (
        <div className='flex flex-col p-5'>
            <label className='flex flex-row text-2xl font-semibold mb-5 justify-center'>Now Playing</label>
            {!isLoading ? (
                <>
                    <div className='flex flex-row flex-wrap gap-5 justify-center'>
                        {nowPlayingData?.results.map((item: Movies) => (
                            <MovieCard
                                key={item.id}
                                movie={item}
                                onClick={() => handleMovieClick(item)}
                                isSelected={selectedMovie?.id === item.id}
                                size='w-40'
                            />
                        ))}
                    </div>
                    {selectedMovie && (
                        <Details movie={selectedMovie} onClose={handleCloseDetails} />
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
            <div className='flex flex-row justify-between mt-5'>
                <button
                    onClick={() => handlePage(-1)}
                    className={`bg-green-500 p-2 rounded-sm ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                    disabled={page === 1}
                >
                Back
                </button>
                <button
                    onClick={() => handlePage(1)}
                    className={`bg-green-500 p-2 rounded-sm ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                    disabled={page === totalPages}
                >
                Next
                </button>
            </div>
        </div>
    )
}

export default Home;