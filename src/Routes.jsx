import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeaderSection } from './containers/HeaderSection/HeaderSection.container'
import { RandomSearchView } from './pages/RandomSearchView'
import { SearchView } from './pages/SearchView'

const BASE_ROUTE = process.env.REACT_APP_BASE_ROUTE

export const Router = () => {
  return (
    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route path={`${BASE_ROUTE}/random-search`} element={<RandomSearchView />} />
        <Route exact path={`${BASE_ROUTE}/`} element={<SearchView />} />
        <Route path="*" element={<SearchView />} />
      </Routes>
    </BrowserRouter>
  )
}
