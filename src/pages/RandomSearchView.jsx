import React from 'react'
import { Grid } from '@material-ui/core'
import { RandomCocktailSection } from '../containers/RandomCocktailSection/RandomCocktailSection.container'

export const RandomSearchView = () => {
  return (
    <Grid container justifyContent="center">
      <RandomCocktailSection />
    </Grid>
  )
}
