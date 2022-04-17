import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { HeaderSection } from './containers/HeaderSection/HeaderSection.container'
import { RandomSearchView } from './pages/RandomSearchView'
import { SearchView } from './pages/SearchView'

export const Router = () => {
  return (
    <HashRouter>
      <HeaderSection />
      <Routes>
        <Route path="random-search" element={<RandomSearchView />} />
        <Route exact path="/" element={<SearchView />} />
        <Route path="*" element={<SearchView />} />
      </Routes>
    </HashRouter>
  )
}
