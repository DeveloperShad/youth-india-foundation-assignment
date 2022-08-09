import React from 'react'

import { Movie_Search, Toggle_Search } from '../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'



const SearchBar = () => {
    const dispatch = useDispatch()

    function debouncing(argument) {
        let timer
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(function () {
                timer = null
                argument.apply(this, args)
            }, 300)
        }
    }

    const handleChange = (e) => {
        const { value } = e.target
        dispatch(Movie_Search(value))
        !value  ? dispatch(Toggle_Search(false)) : dispatch(Toggle_Search(true))

    }
    const deb = useCallback(debouncing(handleChange))

   
    
    return (
        <div className='search-container'>
            <input type="text" onChange={deb} placeholder="Enter a movie name" />
        </div>
    )
}
export default SearchBar


