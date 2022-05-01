import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { HeaderSection } from './containers/HeaderSection/HeaderSection.container'
import { DetailsView } from './pages/DetailsView'
import { RandomSearchView } from './pages/RandomSearchView'
import { SearchView } from './pages/SearchView'

export const Router = () => {
  return (
    <HashRouter>
      <HeaderSection />
      <Routes>
        <Route path="random-search" element={<RandomSearchView />} />
        <Route path="details/:id" element={<DetailsView />} />
        <Route exact path="/" element={<SearchView />} />
        <Route path="*" element={<SearchView />} />
      </Routes>
    </HashRouter>
  )
}
