
import SearchBar from './SearchBar'

import { useSelector } from 'react-redux'
import { NoMovie } from "./NoMovie"
import { MovieCard } from "./MovieCard"

const Home = () => {
    const movies = useSelector((store) => store.movies.movie)
    const initSearch = useSelector((store) => store.movies.toggle)
    // console.log('initSearch', initSearch);
    // console.log('movies', movies);

    return (
        <>
            <div className='home-container'>
                <SearchBar />
                <div className='movie-container'>
                    {
                        movies && movies.map((ele) => {
                            return (
                                <MovieCard ele = {ele}/>
                            )
                        })


                    }

                    {
                        !initSearch && <NoMovie message='Please Search a movie by name' />
                    }
                    {
                        !movies && initSearch && <NoMovie message='Movie Not Available 404' />
                    }
                </div>
            </div>
        </>
    )
}
export default Home
