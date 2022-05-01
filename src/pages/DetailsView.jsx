import { Grid } from '@material-ui/core'
import React from 'react'
import { DetailsSection } from '../containers/DetailSection/DetailSection.container'

export const DetailsView = () => {
  return (
    <Grid container justifyContent="center">
      <DetailsSection />
    </Grid>
  )
}
