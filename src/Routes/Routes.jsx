import React from 'react'
import { Routes as Router, Route } from "react-router-dom"
import DetailsPage from '../Components/DetailsPage'
import Home from '../Components/Home'

const Routes = () => {
  return (
    <Router>
        <Route path='/'  element= { < Home />} />
        <Route path='/detailspage'  element= { < DetailsPage />} />
    </Router>
  )
}

export default Routes
