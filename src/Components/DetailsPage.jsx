import React from 'react'
import { useSelector } from 'react-redux'
const DetailsPage = () => {
    const singleMovie = useSelector((store) => store.movies.single)
    return (
        <div className="movie-detail">
            <img src={singleMovie.Poster} alt="" />
            <p  > {singleMovie.Title}</p>
            <p  > {singleMovie.Type}</p>
            <p  > {singleMovie.Year}</p>
        </div>
    )
}
export default DetailsPage
