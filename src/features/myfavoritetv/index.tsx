import { useEffect, useState } from 'react';

import DetailsTvShow from '../details/detailstvshow';
import MyFavoriteTvCard from '../../component/myfavoritetvcard/myfavoritetvcard';
import { getMyFavoriteTv } from '../../services/myfavoritetv';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

const MyFavoriteTv = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const initialPage = query.get("page") ? parseInt(query.get("page") as string) : 1;

    const [isLoading, setIsLoading] = useState(false);
    const [topMoviesData, setTopMoviesData] = useState<ResponseTvShows>();
    const [page, setPage] = useState<number>(initialPage);
    const [selectedMovie, setSelectedMovie] = useState<TvShows | null>(null);
    const [totalPages, setTotalPages] = useState<number>(6); 

    useEffect(() => {
        fetchTopMovies();
    }, [page]);

    const fetchTopMovies = async () => {
        try {
            setIsLoading(true);
            const response = await getMyFavoriteTv(page.toString());
            setTopMoviesData(response);
            setTotalPages(response?.total_pages || 6);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching top movies:', error);
            setIsLoading(false);
        }
    }

    const handlePage = (increment: number) => {
        const nextPage = page + increment;
        setPage(nextPage);
        navigate(`?page=${nextPage}`);
    }

    const handleMovieClick = (movie: TvShows) => {
        setSelectedMovie(movie);
    }

    const handleCloseDetails = () => {
        setSelectedMovie(null);
    }

    return (
        <div className='flex flex-col p-5'>
            <label className='flex flex-row text-2xl font-semibold mb-5 justify-center'>My Favorite TV Shows</label>
            {!isLoading ? (
                <>
                    <div className='flex flex-row flex-wrap gap-5 justify-center'>
                        {topMoviesData?.results.map((item: TvShows) => (
                            <MyFavoriteTvCard
                            key={item.id}
                            tvshows={item}
                            onClick={() => handleMovieClick(item)}
                            isSelected={selectedMovie?.id === item.id}
                            size='w-40'
                            />
                        ))}
                    </div>
                    {selectedMovie && (
                        <DetailsTvShow tvshows={selectedMovie} onClose={handleCloseDetails} />
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

export default MyFavoriteTv
