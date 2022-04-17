import { Grid } from '@material-ui/core'
import React from 'react'
import { ResultsSection } from '../containers/ResultsSection/ResultsSection.container'
import { SearchSection } from '../containers/SearchSection/SearchSection.container'

export const SearchView = () => {
  return (
    <Grid container justifyContent="center">
      <SearchSection />
      <ResultsSection />
    </Grid>
  )
}
