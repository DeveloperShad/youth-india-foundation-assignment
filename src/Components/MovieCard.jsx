
import React from 'react'
import { SingleMovie } from '../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

export const MovieCard = ({ele}) => {
  const dispatch = useDispatch()
  return (
    <Link to={"/detailspage"} onClick={() => dispatch(SingleMovie(ele))} className="movie-card">
      <img src={ele.Poster} alt="" />
      <p> {ele.Title}</p>
      <p> {ele.Type}</p>
      <p> {ele.Year}</p>
    </Link>
  )
}
