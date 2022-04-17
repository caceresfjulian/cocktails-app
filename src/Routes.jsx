import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeaderSection } from './containers/HeaderSection/HeaderSection.container'
import { RandomSearchView } from './pages/RandomSearchView'
import { SearchView } from './pages/SearchView'

export const Router = () => {
  return (
    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route exact path="/" element={<SearchView />} />
        <Route exact path="/random-search" element={<RandomSearchView />} />
        <Route exact path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
